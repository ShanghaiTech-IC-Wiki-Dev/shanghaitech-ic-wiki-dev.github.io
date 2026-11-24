---
title: 常用术语表
description: 按器件、数字设计、实现验证、模拟、系统与产业整理常见 IC 英文缩写。
---
# 常用术语表

查术语时，先看它属于哪个抽象层。同一个缩写在不同领域可能有不同含义；本页采用芯片学习中常见的用法，不替代课程中的严格定义。理解流程可看 [芯片设计全流程](/explore-ic/knowledge-map)，遇到课程代码则查 [课程总览](/shanghaitech/courses/)。

## 器件、材料与工艺

| 缩写 | 英文全称 | 中文 | 一句话解释 |
| --- | --- | --- | --- |
| IC | Integrated Circuit | 集成电路 | 将器件和互连集成在半导体等基底上形成的电路。 |
| MOSFET | Metal-Oxide-Semiconductor Field-Effect Transistor | 金属氧化物半导体场效应晶体管 | 通过栅极电场调节沟道电流的晶体管。 |
| CMOS | Complementary Metal-Oxide-Semiconductor | 互补金属氧化物半导体 | 使用互补型 MOS 器件实现电路的技术。 |
| NMOS | N-Channel MOS | N 沟道 MOS | 以电子作为沟道主要载流子的 MOS 器件。 |
| PMOS | P-Channel MOS | P 沟道 MOS | 以空穴作为沟道主要载流子的 MOS 器件。 |
| BJT | Bipolar Junction Transistor | 双极结型晶体管 | 依靠双极载流子输运工作的晶体管。 |
| FinFET | Fin Field-Effect Transistor | 鳍式场效应晶体管 | 使用鳍形沟道增强栅极控制的器件。 |
| GAA | Gate-All-Around | 环栅结构 | 栅极环绕沟道以增强静电控制的结构。 |
| CFET | Complementary Field-Effect Transistor | 互补场效应晶体管 | 常指将互补型器件垂直集成的结构路线。 |
| SOI | Silicon on Insulator | 绝缘体上硅 | 在绝缘层上形成硅器件层的材料结构。 |
| GaN | Gallium Nitride | 氮化镓 | 可用于功率与高频器件的宽禁带半导体。 |
| SiC | Silicon Carbide | 碳化硅 | 可用于高压功率器件等领域的宽禁带半导体。 |
| SCE | Short-Channel Effects | 短沟道效应 | 沟道缩短后出现的一组偏离长沟道行为的效应。 |
| DIBL | Drain-Induced Barrier Lowering | 漏致势垒降低 | 漏极电压影响源端势垒而改变器件行为的效应。 |
| CVD | Chemical Vapor Deposition | 化学气相沉积 | 通过气相化学反应在表面形成薄膜的工艺。 |
| ALD | Atomic Layer Deposition | 原子层沉积 | 通过自限制表面反应逐层形成薄膜的工艺。 |
| CMP | Chemical Mechanical Polishing | 化学机械抛光 | 综合化学与机械作用实现表面平坦化的工艺。 |
| EUV | Extreme Ultraviolet | 极紫外 | 在先进光刻中使用的短波长光技术类别。 |
| BEOL | Back End of Line | 后道互连工艺 | 器件形成后构建互连等结构的制造阶段。 |
| FEOL | Front End of Line | 前道器件工艺 | 在晶圆上形成晶体管等器件的制造阶段。 |

## 数字设计与验证

| 缩写 | 英文全称 | 中文 | 一句话解释 |
| --- | --- | --- | --- |
| RTL | Register-Transfer Level | 寄存器传输级 | 用寄存器状态及其间数据转换描述同步硬件的抽象层。 |
| HDL | Hardware Description Language | 硬件描述语言 | 用于描述硬件结构与行为的语言。 |
| SV | SystemVerilog | SystemVerilog 语言 | 扩展 Verilog、支持设计与验证的标准语言。 |
| FSM | Finite-State Machine | 有限状态机 | 用有限状态和转移规则描述控制行为的模型。 |
| FF | Flip-Flop | 触发器 | 按时钟事件保存状态的时序元件。 |
| CDC | Clock Domain Crossing | 跨时钟域 | 信号在不同时钟域之间传递的问题。 |
| RDC | Reset Domain Crossing | 跨复位域 | 不同复位关系之间信号交互的问题。 |
| UVM | Universal Verification Methodology | 通用验证方法学 | 基于 SystemVerilog 的可复用验证方法与类库体系。 |
| SVA | SystemVerilog Assertions | SystemVerilog 断言 | 描述并检查设计性质和时序关系的语言机制。 |
| BMC | Bounded Model Checking | 有界模型检查 | 在有限展开深度内寻找性质反例的形式方法。 |
| DFT | Design for Testability | 可测性设计 | 在设计中加入结构以提高制造后测试能力。 |
| ATPG | Automatic Test Pattern Generation | 自动测试向量生成 | 针对故障模型自动生成测试激励。 |
| BIST | Built-In Self-Test | 内建自测试 | 由芯片内部逻辑生成或检查测试的技术。 |
| MBIST | Memory Built-In Self-Test | 存储器内建自测试 | 面向片上存储器的内建测试技术。 |
| ECO | Engineering Change Order | 工程变更 | 在已有实现上进行受控修改以修复或优化设计。 |

## 综合、物理实现与签核

| 缩写 | 英文全称 | 中文 | 一句话解释 |
| --- | --- | --- | --- |
| EDA | Electronic Design Automation | 电子设计自动化 | 支持电路设计、验证与实现的软件方法体系。 |
| PDK | Process Design Kit | 工艺设计套件 | 将某项制造工艺的模型和规则提供给设计端的数据集合。 |
| PPA | Power, Performance, Area | 功耗、性能、面积 | 评价设计取舍的一组常用指标。 |
| P&R | Placement and Routing | 布局布线 | 决定单元位置并完成物理连线的过程。 |
| CTS | Clock Tree Synthesis | 时钟树综合 | 构造时钟分配网络并控制其延迟与偏斜。 |
| STA | Static Timing Analysis | 静态时序分析 | 基于时序图和约束检查路径时序的方法。 |
| SDC | Synopsys Design Constraints | 设计约束格式 | 描述时钟和时序例外等约束的常用命令格式。 |
| SDF | Standard Delay Format | 标准延迟格式 | 交换并回标单元或互连延迟等信息的格式。 |
| SPEF | Standard Parasitic Exchange Format | 标准寄生交换格式 | 表达互连寄生电阻电容等参数的格式。 |
| LEF | Library Exchange Format | 库交换格式 | 描述工艺层及单元抽象物理信息的格式。 |
| DEF | Design Exchange Format | 设计交换格式 | 交换布局布线等设计物理信息的格式。 |
| GDSII | Graphic Data System II | 版图数据格式 | 交付和交换版图几何图形的常用格式。 |
| DRC | Design Rule Check | 设计规则检查 | 检查版图几何是否符合工艺规则。 |
| LVS | Layout Versus Schematic | 版图原理图一致性检查 | 比较版图提取电路与原理图或网表的连接关系。 |
| PEX | Parasitic Extraction | 寄生参数提取 | 从物理版图估计互连等产生的寄生参数。 |
| PVT | Process, Voltage, Temperature | 工艺、电压、温度 | 描述设计分析条件的主要维度。 |
| OCV | On-Chip Variation | 片上变异 | 同一芯片不同位置器件与路径参数的变化。 |
| EM | Electromigration | 电迁移 | 电流作用下金属原子迁移引起的可靠性问题。 |
| SI | Signal Integrity | 信号完整性 | 研究耦合、反射等因素对信号质量的影响。 |

## 模拟、射频与测量

| 缩写 | 英文全称 | 中文 | 一句话解释 |
| --- | --- | --- | --- |
| ADC | Analog-to-Digital Converter | 模数转换器 | 将连续模拟信号转换成数字表示的电路。 |
| DAC | Digital-to-Analog Converter | 数模转换器 | 将数字码转换成模拟输出的电路。 |
| PLL | Phase-Locked Loop | 锁相环 | 利用反馈使输出相位或频率跟踪参考的系统。 |
| LDO | Low-Dropout Regulator | 低压差线性稳压器 | 在较小输入输出压差下工作的线性稳压电路。 |
| LNA | Low-Noise Amplifier | 低噪声放大器 | 用于接收链路前端并尽量少引入噪声的放大器。 |
| PA | Power Amplifier | 功率放大器 | 为负载或天线提供较大信号功率的电路。 |
| SNR | Signal-to-Noise Ratio | 信噪比 | 信号功率与噪声功率之比。 |
| ENOB | Effective Number of Bits | 有效位数 | 将转换器实际性能折算为理想量化位数的指标。 |
| CMRR | Common-Mode Rejection Ratio | 共模抑制比 | 衡量电路抑制共模输入能力的指标。 |
| PSRR | Power Supply Rejection Ratio | 电源抑制比 | 衡量电源变化耦合到输出程度的指标。 |
| GBW | Gain-Bandwidth Product | 增益带宽积 | 在适用模型下刻画放大器增益与带宽关系的指标。 |
| ATE | Automatic Test Equipment | 自动测试设备 | 对芯片施加激励并自动采集判定结果的设备。 |

## 系统、存储与产业

| 缩写 | 英文全称 | 中文 | 一句话解释 |
| --- | --- | --- | --- |
| SoC | System on Chip | 片上系统 | 集成计算、存储、互连与接口等功能的芯片系统。 |
| ISA | Instruction Set Architecture | 指令集架构 | 定义机器指令及软件可见行为的接口规范。 |
| CPU | Central Processing Unit | 中央处理器 | 执行通用指令流的计算单元。 |
| GPU | Graphics Processing Unit | 图形处理器 | 适合大规模并行工作负载的处理器类别。 |
| NPU | Neural Processing Unit | 神经网络处理器 | 面向神经网络运算优化的处理单元类别。 |
| FPGA | Field-Programmable Gate Array | 现场可编程门阵列 | 制造后仍可配置逻辑与互连的可编程芯片。 |
| ASIC | Application-Specific Integrated Circuit | 专用集成电路 | 面向特定应用设计的集成电路。 |
| SRAM | Static Random-Access Memory | 静态随机存储器 | 依靠双稳态电路保存数据、上电时无需刷新的一类存储器。 |
| DRAM | Dynamic Random-Access Memory | 动态随机存储器 | 依靠电荷存储并需要周期刷新的存储器。 |
| HBM | High Bandwidth Memory | 高带宽存储器 | 采用堆叠与宽接口提供高带宽的存储技术。 |
| MRAM | Magnetoresistive Random-Access Memory | 磁性随机存储器 | 利用磁性状态及磁阻效应读写信息的存储器。 |
| CIM | Compute-in-Memory | 存内计算 | 在存储阵列内或紧邻阵列完成部分计算的技术。 |
| NoC | Network on Chip | 片上网络 | 连接片上模块并传输数据的网络化互连。 |
| CPO | Co-Packaged Optics | 光电共封装 | 将光学引擎与电子芯片在封装层面紧密集成。 |
| TSV | Through-Silicon Via | 硅通孔 | 穿过硅基底以实现垂直电连接的结构。 |
| IP | Intellectual Property | 知识产权核 | 在芯片语境中常指可授权复用的设计模块。 |
| IDM | Integrated Device Manufacturer | 垂直整合制造商 | 同时具有芯片设计与制造等业务的企业。 |
| OSAT | Outsourced Semiconductor Assembly and Test | 外包半导体封装测试 | 向其他芯片企业提供封装与测试服务的业务类别。 |
| MPW | Multi-Project Wafer | 多项目晶圆 | 多个设计共享同批晶圆制造资源的服务方式。 |
| NRE | Non-Recurring Engineering | 非重复性工程费用 | 项目中不随每颗芯片重复发生的研发等费用。 |

## 使用提醒

同一页报告里，`SI` 也可能表示国际单位制，`IP` 也可能指网络协议。缩写必须服从上下文。PPA、良率、吞吐、能效等指标还需要说明测量范围与条件：芯片核心、整个裸片、开发板和整机的结果不能直接混用。
