---
title: 数字电路自学
description: 从 HDLBits 和 Verilog 出发，经数字系统公开课、仿真与 FPGA 实践进入完整硬件设计。
---
# 数字电路自学

数字电路不是把软件代码换一种语法。硬件描述语言（Hardware Description Language，HDL）描述并行电路，寄存器在时钟边沿更新，组合路径有延迟。推荐顺序是**逻辑概念 → 小模块 HDL → 测试平台 → 时序分析 → 系统集成**。可与 [数字学习地图](/learning/digital-ic/) 配合使用。

## 入门：先会描述和检查小电路

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [HDLBits](https://hdlbits.01xz.net/) | 在线练习 | 入门 | 从组合逻辑、计数器到有限状态机；做完后画出对应电路，而非只记录通过状态 |
| Harris、Harris《Digital Design and Computer Architecture》 | 教材 | 入门—进阶 | 把逻辑、HDL 与处理器数据通路串起来；选择与自己指令集目标匹配的版本 |
| Verilog / SystemVerilog 语言基础 | 语言与规范 | 入门—进阶 | 优先掌握位宽、符号、阻塞与非阻塞赋值、组合与时序过程；语言标准可从 [Accellera](https://www.accellera.org/) 查找入口 |
| [MIT 6.191（原 6.004）](https://6191.mit.edu/) | 数字系统课程 | 入门—进阶 | 自底向上学习逻辑、状态机与处理器；[Computation Structures](https://computationstructures.org/) 保留旧版公开材料 |

每个练习都问三个问题：这里需要几个寄存器？复位后状态是什么？输出在哪个周期有效？特别检查位宽扩展、默认赋值、锁存器推断与复位优先级。测试要覆盖连续输入、空闲间隔和边界情况，不要只用一条“正常路径”。

## 进阶：从语法走向可实现的系统

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [UCB EECS151](https://www2.eecs.berkeley.edu/Courses/EECS151/) | 数字设计与集成电路课程 | 进阶 | 连接 RTL、存储模块、流水线、FPGA / ASIC 方法与物理约束 |
| [Verilator](https://www.veripool.org/verilator/) | 编译型仿真工具 | 进阶 | 适合构建较大的自动化回归；注意支持的语言特性与时间模型需查当前文档 |
| [cocotb](https://www.cocotb.org/) | Python 验证框架 | 进阶 | 用参考模型、随机输入和自动检查测试 HDL；底层仍需支持的仿真器 |
| [Chisel](https://www.chisel-lang.org/) | Scala 硬件构造语言 | 进阶 | 适合参数化与生成式设计；先能读生成 RTL，再学习抽象与组件化 |
| [SpinalHDL](https://spinalhdl.github.io/SpinalDoc-RTD/) | Scala 硬件构造语言 | 进阶 | 可用于总线、流水线及接口组织；同样不能绕过 HDL 与时序基础 |

SystemVerilog 不等于完整验证环境，Chisel / SpinalHDL 也不等于自动获得正确电路。初学者宜先用一种语言完成模块与验证，再因参数化或工程需求引入生成器。综合后检查资源与关键路径；功能仿真通过不能证明时序满足要求，更不能证明跨时钟域（Clock Domain Crossing，CDC）安全。

## 实践：先仿真，再上板，最后扩成系统

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [开源仿真工具链](/tools/open-source/) | 本地实验 | 入门 | Icarus Verilog 与波形查看器足以开始计数器、状态机和 FIFO 实验 |
| [Digilent](https://digilent.com/) 等厂商的 FPGA 开发板资料 | 板卡与参考设计 | 入门—进阶 | 选有原理图、引脚约束、时钟说明和工具支持的板卡，优先使用课程指定硬件 |
| FPGA 厂商工具与板卡手册 | 工程实践 | 进阶 | AMD Vivado、Intel Quartus 等依目标器件选择；烧录前检查电平、引脚与复位 |
| [一生一芯](https://ysyx.oscc.cc/) | 处理器与系统项目 | 进阶—深入 | 连接 C、指令集、处理器、验证与系统软件，参见 [项目介绍](/competitions/projects/ysyx) |

建议第一项作品是同步 FIFO：明确容量、满空行为、同时读写规则；写参考队列与自动比较；覆盖复位、绕回和满空边界。第二项再做 UART 或简单处理器。FPGA 上板前先完成仿真，上板后记录约束、时钟频率和时序报告；LED 亮了只是一个观察，不是完整功能验证。

## 与上科大课程配合

<CourseTable codes="EE115B,EE113,EE113L,EE116,EE291F" />

EE115B 阶段用小题巩固逻辑与 HDL；EE113、EE113L 阶段关注晶体管、电路与版图层次；EE116 和 EE291F 可进一步连接可编程逻辑或数字实现流程。具体实验与工具以当学期课程大纲为准。本站参考了往届 EE115B HDL 练习与 Verilog 学习笔记，只提炼学习方法，不将其中某次考试范围作为长期承诺。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)。
- HDLBits、MIT 与 Berkeley 官方课程入口见上表；往届笔记仅作为资源线索。
