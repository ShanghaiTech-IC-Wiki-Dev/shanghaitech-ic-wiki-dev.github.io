---
title: 数字 IC 与体系结构路线
description: 从上科大数字电路、RTL 与体系结构课程出发，走向处理器、加速器和数字 VLSI 实践。
---
# 数字 IC 与体系结构路线

这条路线适合喜欢逻辑、编程、并行系统和性能分析的同学。数字设计关心“硬件每周期做什么”，体系结构关心“为什么这样组织计算和数据”。二者紧密相关，但不是同一件事：支持某套指令集，并不能自动证明处理器快；程序运行正确，也不能证明 RTL 已满足时序和制造约束。

## 按学年安排主线

下表以 2026 级 EE 培养方案为基础，结合 2026–2027 年度表的开课季节提供建议。大三以后的选修组合是本 Wiki 推荐，不是官方统一课表；实际安排需检查冲突、学分负担和选课资格。

| 学期 | 课程 | 为什么放在这里 |
| --- | --- | --- |
| 大一秋 | SI100B；数学分析 I、线性代数 | 先接触信息技术，建立数学与计算直觉 |
| 大一春 | EE111、EE111L；数学分析 II、普通物理 I | 为数字电路的电学模型和实验打底 |
| 大二秋或春 | EE115B，配合 EE115A、EE150/EE150L | 建立组合逻辑、时序与系统基础；不要只学语法 |
| 大二春 | CS100 | 2026 级 EE 方案建议此时修读，训练程序与自动化能力 |
| 大三秋 | EE113、EE113L | 接触数字 IC 与实验；选课前确认官方 `EE115` 先修写法 |
| 大三春 | CS110、CS110P；按负担选择 EE116 或 EE291F | CS110 承接 CS100；EE116 要求 EE115A/EE115B，EE291F 要求 EE113 |
| 大三暑期 | 关注 Cadence 暑期实训的当年通知 | 若有资格和名额，用集中实践串起 RTL-to-GDS |
| 大四秋或研究生阶段 | EE219、EE213，按目标选择 EE216 | EE219 和 EE213 承接 EE113；EE216 承接 EE116 |
| 大四春或研究生阶段 | EE2210；已有系统基础后考虑 CS210 | 补可测性设计；CS210 还需 CS130 等先修，不能只凭 CS110 进入 |

<CourseTable codes="SI100B,EE111,EE115A,EE115B,CS100,CS110,CS110P,EE113,EE113L,EE116,EE291F,EE219,EE213,EE216,EE2210,CS210" />

::: warning 先修边界
年度表将 EE113 先修写为 `EE111,EE115`，不要自行断言它等价于只修 EE115B。EE219 还要求线性代数、概率统计，并推荐硬件描述语言与 Python 基础。EE219、EE213 等在表中为研究生课程，本科生选修须遵守当学期规定。
:::

## 两种兴趣分支

**偏数字 IC 实现**：把 RTL、验证、综合、约束、布局布线与时序分析连起来。至少能解释自己的时钟、复位、接口、关键路径与面积来源；不要把“工具跑完了”当成验收标准。

**偏体系结构与加速器**：在 CS110 之后补操作系统、并行计算和必要的编译知识。用工作负载分析支撑设计选择，区分计算瓶颈与访存瓶颈。进入 EE219 一类项目时，同时检查数值精度、软件映射和硬件资源，而不只比较乘加单元数量。

## 校外资源怎样补

- [数字设计自学](/learning/digital-ic/resources)：从小模块、状态机和自检查测试开始；[HDLBits](https://hdlbits.01xz.net/) 适合语法与逻辑练习，但不替代完整验证项目。
- [体系结构自学](/learning/computer-architecture/general-purpose-systems)：把指令、流水线、缓存和性能模型联系起来；先掌握一个简单系统，再扩展复杂度。
- [基础工具与数学](/learning/fundamentals/)：补 Linux、Git、C/C++、Python、概率和线性代数。
- [AI 硬件自学](/learning/computer-architecture/heterogeneous-systems)：当项目涉及模型部署和加速器时再按需深入。

## 可以进入哪些科研方向

从 [数字 VLSI](/explore-ic/research-directions/digital-vlsi)、[体系结构](/explore-ic/research-directions/architecture)、[AI 硬件](/explore-ic/research-directions/ai-hardware)、[硬件安全](/explore-ic/research-directions/hardware-security) 和 [EDA](/explore-ic/research-directions/eda) 找问题入口。阅读组主页时，关注具体问题、所用平台和验证方法，而不只看“做 CPU”或“做 AI”的标签。

## 实践建议

1. **先做一个可验证的小系统**：例如带握手接口的 FIFO、可配置计数器或简化处理器。规格写清复位、异常和边界条件，建立自动化测试后再扩展功能。
2. **让结果经过不止一层检查**：RTL 仿真后尝试综合，解释资源与时序；有 FPGA 条件再上板。FPGA 运行不能代替 ASIC 签核，仿真成功也不是流片成功。
3. **把一生一芯作为系统实践路线**：见 [一生一芯](/competitions/projects/ysyx)，按照项目官方阶段推进，不能把报名或仿真当成流片承诺。
4. **竞赛和实训围绕已有基础选**：查 [竞赛导航](/competitions/) 和 [Cadence 实训](/shanghaitech/courses/cadence-summer)，以当年通知与资格要求为准。报告同时保留正确性证据、配置、资源开销与未完成检查。

## 参考与来源

- [2026 级 EE 培养方案入口](https://sist.shanghaitech.edu.cn/2833/list.htm)：基础课程建议学期，依据官方本地摘录整理。
- [2026–2027 学年开课表](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)：课程代码、季节与先修要求。
- [学院课程体系](https://sist.shanghaitech.edu.cn/2835/list.htm)。实训细节见本站对应页及当年通知。
