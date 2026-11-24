---
title: 模拟电路自学
description: 从微电子基础、Razavi 课程与 SPICE 实践走向模拟 CMOS、ADC、PLL 和 gm/Id 设计。
---
# 模拟电路自学

模拟电路的主线是**建立模型 → 手算预估 → 仿真检查 → 解释偏差 → 重新设计**。一开始应能说明器件工作区和信号路径，而不是靠扫描尺寸碰出一条好看的曲线。可结合 [模拟学习地图](/learning/analog-ic/) 与 [模拟及混合信号方向](/explore-ic/research-directions/analog-mixed) 选择后续主题。

## 入门：器件模型与基本放大器

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| Razavi《Fundamentals of Microelectronics》 | 教材 | 入门 | 从二极管、BJT、MOS 到基本放大电路，适合电路基础之后学习 |
| Razavi 微电子与模拟电路公开讲授（[UCLA CCL](https://www.seas.ucla.edu/brweb/)） | 课程与作者资源入口 | 入门—进阶 | 配合作者教材查找公开课程，视频用于建立直觉，推导与习题仍需独立完成 |
| Sedra、Smith 等《Microelectronic Circuits》 | 教材 | 入门—进阶 | 覆盖面广，可作为第二种解释；不要因符号不同误判模型矛盾 |
| [ngspice](https://ngspice.sourceforge.io/) | 电路仿真器 | 入门—进阶 | 先用简单网表学习直流工作点、交流小信号和瞬态分析 |

先把共源、源跟随器、差分对和电流镜讲清楚。每次手算都写明忽略了什么，例如沟道长度调制、体效应或寄生电容；仿真前估算增益、摆幅与功耗数量级。结果不符时先查工作点和单位，再讨论高阶模型，不要直接改器件尺寸掩盖问题。

## 进阶：CMOS 设计与系统模块

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| Razavi《Design of Analog CMOS Integrated Circuits》 | 教材 | 进阶 | 学习噪声、频率响应、反馈、稳定性和运放设计，宜已有 MOS 小信号基础 |
| Gray、Hurst、Lewis、Meyer《Analysis and Design of Analog Integrated Circuits》 | 教材 | 进阶—深入 | 训练更系统的分析，适合对照器件模型、反馈与噪声推导 |
| Allen、Holberg《CMOS Analog Circuit Design》 | 教材 | 进阶 | 从电路规格到尺寸设计，关注设计流程及实际约束 |
| Razavi《RF Microelectronics》 | 射频教材 | 进阶—深入 | 进入低噪声放大器、混频器、振荡器前，先补阻抗、噪声与非线性基础 |
| Jespers、Murmann《Systematic Design of Analog CMOS Circuits》 | 方法教材 | 进阶 | 学习跨导效率（gm/Id）与查表设计，连接性能指标、器件尺寸和偏置 |
| 数据转换器与锁相环专题 | 模块路线 | 进阶—深入 | ADC 先学采样、量化与比较器；PLL 先学反馈、相位模型与环路动态 |

gm/Id 不是脱离工艺的通用尺寸公式。查表数据依赖 PDK、器件类型、沟道长度、偏置和温度，不能直接混用不同工艺的曲线。学习 ADC 可先建立理想量化器，再加入有限建立、噪声与失配；学习锁相环（Phase-Locked Loop，PLL）可先做行为模型，理解带宽、稳定性和噪声传递，再进入晶体管级。

## 实践：用一个完整设计训练判断力

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [Xschem 与开源模拟流程](/tools/open-source/) | 原理图、SPICE 实验 | 入门—进阶 | 用开放工具和匹配的器件模型做小规模设计 |
| [商用模拟工具链](/tools/eda/commercial) | Virtuoso、Spectre、HSPICE 导航 | 进阶 | 有授权和课程环境时使用；工具本身不能替代电路分析 |
| 两级运放或低功耗 OTA | 设计项目 | 进阶 | 明确负载、增益、带宽、相位裕度、摆幅与功耗，逐项验证 |
| ADC / PLL 行为模型 | Python 或电路级项目 | 进阶 | 比较理想模型与非理想因素，先解释趋势，再扩大复杂度 |

建议报告按四部分组织：规格与假设、手算设计、仿真方法、结果与不足。直流工作点正确后再看交流和瞬态；反馈电路测环路增益要使用合适方法。进一步检查工艺、电压、温度（Process, Voltage, Temperature，PVT）与失配敏感性。完成版图后，寄生提取与后仿真可能改变结论，原理图仿真通过不是流片可用的证明。

## 与上科大课程配合

<CourseTable codes="EE115A,EE112,EE212,EE291I" />

[EE115A](/shanghaitech/courses/ee115a) 阶段优先补器件与基本放大电路；后续课程可结合 CMOS 集成电路教材深入。具体采用何种教材、模型及设计项目，以当学期大纲为准。不要把公开教材中的示例工艺参数直接当成本校实验 PDK 参数。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)。
- [Razavi / UCLA Communication Circuits Laboratory](https://www.seas.ucla.edu/brweb/)：作者教材与教学入口；其他教材可通过学校图书馆获取。
