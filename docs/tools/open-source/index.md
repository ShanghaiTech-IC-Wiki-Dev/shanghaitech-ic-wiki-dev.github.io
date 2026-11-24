---
title: 开源 EDA 工具链
description: 用开源仿真、综合、物理设计与模拟工具建立本地实验，并完成一个 Icarus Verilog 和 GTKWave 最小示例。
---
# 开源 EDA 工具链

开源工具适合自学、课程前练习和可复现实验，也能用于真实设计中的特定环节。但“开源”不意味着零配置、所有工艺可用，或自动满足制造签核。建议先跑通 **HDL → 仿真 → 自动检查 → 波形**，再进入综合、物理设计与 PDK。

## 数字前端：描述、仿真与验证

| 工具 | 用途 | 入门建议 |
| --- | --- | --- |
| [Icarus Verilog](https://steveicarus.github.io/iverilog/) | Verilog 编译与事件驱动仿真 | 用于小模块与测试平台；SystemVerilog 支持有范围限制 |
| [Verilator](https://www.veripool.org/verilator/) | 编译型仿真与静态警告 | 适合较大设计与自动化测试，按当前版本检查语言和时间特性 |
| [GTKWave](https://gtkwave.sourceforge.net/) | 波形查看 | 从 VCD 文件观察时序，不用肉眼检查代替自动判断 |
| [Surfer](https://surfer-project.org/) | 波形查看 | 可作为另一种波形浏览选择，格式支持以当前文档为准 |
| [cocotb](https://www.cocotb.org/) | Python 测试平台 | 编写参考模型与自动检查；需配合支持的仿真器 |
| [Yosys](https://yosyshq.net/yosys/) | 逻辑综合 | 理解 RTL 怎样变成网表，检查触发器、组合逻辑与推断结果 |

## 数字后端与模拟工具

| 工具 | 用途 | 注意事项 |
| --- | --- | --- |
| [OpenROAD](https://theopenroadproject.org/) | 数字物理设计 | 连接放置、时钟树、布线与分析，需要兼容库及流程配置 |
| [OpenLane](https://github.com/The-OpenROAD-Project/OpenLane)、[OpenLane2](https://github.com/efabless/openlane2) | 流程集成与自动化 | 它们不是另一个仿真器；选择前检查当前维护状态、支持 PDK 和配套版本 |
| [iEDA](https://github.com/OSCC-Project/iEDA) | 开源 EDA 工具与流程 | 从项目示例了解支持环节，不假定与其他流程配置直接兼容 |
| [KLayout](https://www.klayout.de/) | 版图查看、编辑与规则检查 | 具体 DRC / LVS 能力取决于所用脚本和工艺支持 |
| [Magic](https://opencircuitdesign.com/magic/) | 定制版图与提取 | 需匹配工艺技术文件与规则 |
| [Netgen](https://opencircuitdesign.com/netgen/) | 网表比较与 LVS | 与正确的器件映射、规则和提取网表配合使用 |
| [ngspice](https://ngspice.sourceforge.io/) | 电路仿真 | 从简单网表与工作点分析开始，器件模型必须匹配 |
| [Xschem](https://xschem.sourceforge.io/) | 原理图编辑与网表生成 | 常与 ngspice 及开放 PDK 组合，不是仿真求解器本身 |

### 开放 PDK 与流片入口

- [SkyWater 开源 PDK](https://github.com/google/skywater-pdk)：用于学习工艺库结构、器件与设计规则。
- [GlobalFoundries GF180MCU 开源 PDK](https://github.com/google/gf180mcu-pdk)：另一个开放工艺资料入口，工具适配和模型范围需按文档确认。
- [IHP Open PDK](https://github.com/IHP-GmbH/IHP-Open-PDK)：包含面向模拟、混合信号和射频等应用的开放资料；具体工艺的发布成熟度以仓库说明为准。
- [Tiny Tapeout](https://tinytapeout.com/)：面向小规模设计的多项目流片入口，先阅读接口、面积、验证和提交规则；费用、批次与工艺以项目公告为准。

PDK 是工艺设计套件，不只是几个 SPICE 模型。开放发布也不等于所有模型已完成生产验证，更不表示任何工具输出都能交付制造。固定工具与 PDK 版本，使用项目明确支持的组合，不随意混合规则文件、库和模型。

## 最小上手：Icarus Verilog + GTKWave

先按项目官方说明安装 `iverilog`、配套的 `vvp` 和 `gtkwave`。以下示例可在本地目录运行，不需要工艺库、FPGA 板或商用许可证。

保存为 `counter.v`：

```verilog
module counter (
    input wire clk,
    input wire rst,
    output reg [3:0] count
);
    always @(posedge clk) begin
        if (rst)
            count <= 4'd0;
        else
            count <= count + 4'd1;
    end
endmodule
```

保存为 `tb_counter.v`：

```verilog
`timescale 1ns/1ps
module tb_counter;
    reg clk = 1'b0;
    reg rst = 1'b1;
    wire [3:0] count;

    counter dut (.clk(clk), .rst(rst), .count(count));
    always #5 clk = ~clk;

    initial begin
        $dumpfile("counter.vcd");
        $dumpvars(0, tb_counter);
        repeat (2) @(negedge clk);
        rst = 1'b0;
        repeat (3) @(negedge clk);
        if (count !== 4'd3)
            $fatal(1, "Unexpected counter value");
        $display("PASS: count = %0d", count);
        $finish;
    end
endmodule
```

编译、执行并查看波形：

```bash
iverilog -g2012 -s tb_counter -o sim.vvp counter.v tb_counter.v
vvp sim.vvp
gtkwave counter.vcd
```

这是教学示例，**不是本站已执行的测试结果**。预期行为是：复位时计数器清零，解除复位后每个上升沿加一，经过三个有效上升沿检查值为 `3`；不符时仿真应报错退出。GTKWave 中添加 `clk`、`rst` 和 `count`，观察变化发生在哪个边沿。没有图形界面的服务器可先保留 VCD，在允许的数据范围内下载到本地查看。

接下来增加溢出、再次复位等测试，再将模块送入 Yosys 观察网表。不要从这个小示例推断真实芯片时序或功耗；相关方法见 [数字自学](/learning/digital-ic/resources) 与 [商用流程](/tools/eda/commercial)。
