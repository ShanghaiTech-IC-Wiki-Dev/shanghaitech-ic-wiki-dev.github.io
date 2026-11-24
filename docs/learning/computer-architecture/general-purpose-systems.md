---
title: 通用计算系统
description: 从 CS61C 和 RISC-V 进入处理器设计、定量建模、gem5 与开源 CPU 和 GPU 研究。
---
# 通用计算系统

体系结构关心的不只是“处理器怎么接线”，还包括**给定工作负载、面积、功耗与软件条件，为什么这样设计更合适**。建议先理解指令集架构（Instruction Set Architecture，ISA）和微架构的区别，再学习流水线、存储层次与并行计算。硬件实现基础见 [数字电路自学](/learning/digital-ic/resources)。

## 入门：连起程序与硬件

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [UCB CS61C](https://cs61c.org/) | 公开课 | 入门—进阶 | 以 C、汇编、数据表示、处理器和存储层次连接软件与硬件 |
| Patterson、Hennessy《Computer Organization and Design》 | 教材 | 入门—进阶 | 建议选择 RISC-V 版本；结合手算时序图与小程序学习 |
| [CMU 18-447](https://course.ece.cmu.edu/~ece447/) | 体系结构课程 | 进阶 | 通过流水线处理器和存储系统加深设计理解；各学期公开材料范围不同 |
| [RISC-V International](https://riscv.org/) | 官方规范入口 | 入门—深入 | 从所用整数 ISA、异常与特权机制查起，明确规范版本及扩展集合 |

不要把 ISA 模拟器能执行程序，等同于硬件微架构正确。先明确指令语义，再检查取指、译码、执行、访存和提交之间的关系。对于流水线，必须解释数据冒险、控制冒险、旁路与停顿；对于 Cache，必须区分容量、行大小、相联度与缺失代价。

## 进阶：学习定量方法

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [UCB CS152](https://www2.eecs.berkeley.edu/Courses/CS152/) | 体系结构课程 | 进阶 | 扩展到现代处理器、存储系统与设计权衡，先检查所选学期先修要求 |
| Hennessy、Patterson《计算机体系结构：量化研究方法》 | 教材 | 进阶—深入 | 不仅看结论，要复算工作负载、性能、能耗与成本之间的比较 |
| Roofline（Williams、Waterman、Patterson，2009） | 经典论文 | 进阶 | 用运算强度、带宽与峰值算力判断计算或访存瓶颈 |
| Amdahl's Law in the Multicore Era（Hill、Marty，2008） | 经典论文 | 进阶 | 在资源约束下讨论并行比例与多核配置，避免只追求核心数量 |
| The Optimum Pipeline Depth for a Microprocessor（Hartstein、Puzak，2002） | 经典论文 | 进阶 | 理解流水深度、锁存开销与停顿之间的权衡 |
| [gem5](https://www.gem5.org/) | 架构模拟平台 | 进阶—深入 | 可做 CPU、Cache 等设计空间探索，但必须说明模型、参数、预热与统计区间 |

进一步可读乱序处理器机理模型、GPU 的 MWP/CWP 模型、LogCA，以及 DNN 加速器的 Timeloop / Accelergy。它们解决的问题和精度不同，不宜把模型预测直接写成芯片实测性能。阅读论文时记录“假设了什么、输入是什么、在哪些负载下验证、哪些机制没建模”。

## 实践：选择一个开源系统读进去

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [Rocket Chip](https://github.com/chipsalliance/rocket-chip) | RISC-V SoC 生成器 | 进阶 | 适合研究参数化核、总线、Cache 与系统集成，先从默认配置读起 |
| [BOOM](https://github.com/riscv-boom/riscv-boom) | 乱序 RISC-V 核 | 深入 | 关注重命名、发射、重排序与恢复，宜先理解顺序流水线 |
| [XiangShan](https://github.com/OpenXiangShan/XiangShan) | 高性能 RISC-V 处理器 | 深入 | 面向复杂微架构与工程验证，不建议作为第一次 HDL 项目 |
| [Vortex](https://github.com/vortexgpgpu/vortex) | 开源 GPU 项目 | 进阶—深入 | 学习 SIMT、线程调度、访存及软硬件接口 |
| [Ventus](https://github.com/THU-DSP-LAB/ventus-gpgpu) | 开源 GPGPU 项目 | 进阶—深入 | 可用于研究 RISC-V 相关 GPU 栈；按项目支持范围准备编译与运行环境 |

第一次实验不必修改大型处理器。可以固定一组小程序，用 gem5 改变 Cache 容量或相联度，记录执行时间、缺失率与访存统计；或者在已有教学核中加入一种旁路并比较 CPI。**一次只改一个主要变量**，同时记录输入、编译参数、模型配置和版本。IPC 更高不一定程序更快，频率与工作量也必须一致或明确交代。

## 与上科大课程配合

<CourseTable codes="CS110,CS110P,CS210,EE219" />

先用 [CS110](/shanghaitech/courses/cs110) 建立指令执行与性能分析基础，再按目标进入体系结构、GPU 或 AI 加速器。本文经典论文选择参考了维护者的往届定量建模笔记，阅读顺序是建议，不代表课程指定书目。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)。
- 各课程、模拟器与开源核官方主页见上表；论文可按题名通过学校图书馆或作者主页检索。
