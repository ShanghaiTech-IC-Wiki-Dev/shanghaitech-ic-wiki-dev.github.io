---
title: 自学方法与公开课对照
description: 把上科大课程、公开课和可验证的小项目接起来，按目标而不是收藏数量选择资源。
---
# 自学方法与公开课对照

资源很多，最难的是决定**现在学什么、做到什么程度就进入下一步**。先在 [学习地图](/learning/) 确认方向，再从这里选择一门主课、一本参考书和一个练习。公开课用于补概念、换一种解释或扩展项目，不替代本校课程的作业要求与实验规范。

## 入门：先确定目标

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [基础知识](/learning/fundamentals/) | 数学、编程、命令行 | 入门 | 看不懂公式、不会编译或无法操作服务器时，从这里补短板 |
| [数字电路](/learning/digital-ic/resources) | 公开课、HDL、仿真 | 入门—进阶 | 目标是把组合逻辑、时序逻辑写成能验证的硬件 |
| [模拟电路](/learning/analog-ic/resources) | 教材、公开课、SPICE | 入门—进阶 | 从工作点、小信号模型走向放大器、反馈与混合信号模块 |
| [半导体器件](/learning/devices-and-process/resources) | 教材、器件仿真 | 入门—进阶 | 补齐能带、结、MOS 与工艺之间的联系 |

不要为了做一个计数器先学完全部数学，也不要为看一篇论文同时开三门公开课。缺哪一项，就补到能解释当前问题；主线仍由自己的课程或项目决定。

## 进阶：上科大课程 ↔ 公开资源

下表是**主题对照与自学建议，不是学分互认，也不表示教学内容、难度和实验完全相同**。上科大课程名称依据 2026–2027 学年开课计划；开课及要求以教务系统、当学期大纲为准。详细课程信息见 [课程导航](/shanghaitech/courses/)。

| 上科大课程 | 可配合的公开课 / 教材 | 对照重点 | 使用方法 |
| --- | --- | --- | --- |
| CS110 计算机体系结构 I | [UCB CS61C](https://cs61c.org/) | C、指令集、流水线与存储层次 | 遇到抽象硬件概念时，结合软件执行过程理解 |
| EE115B 数字电路 | [MIT 6.191（原 6.004）](https://6191.mit.edu/)、[UCB EECS151](https://www2.eecs.berkeley.edu/Courses/EECS151/) | 组合逻辑、时序逻辑、有限状态机 | 先掌握数电，再选公开练习做独立验证 |
| EE113 数字集成电路 I | UCB EECS151、MIT 6.191 | CMOS 到数字系统的层次化设计 | 配合本校晶体管级与设计约束内容，注意课程侧重点不同 |
| EE115A 模拟电路 | Razavi《Fundamentals of Microelectronics》及公开讲授 | 器件模型、基本放大器 | 先手算，再用仿真核对假设 |
| EE112 模拟集成电路 I | Razavi《Design of Analog CMOS Integrated Circuits》 | CMOS 放大器、反馈、稳定性、噪声 | 不跳过工作点和小信号分析 |
| EE150 信号与系统 | [MIT OpenCourseWare](https://ocw.mit.edu/) 的 Signals and Systems | 线性时不变系统、卷积、变换 | 用 Python 画出时域与频域对应关系 |
| EE219 智能计算系统 | [MIT 6.5940 / EfficientML](https://efficientml.ai/)、[Stanford CS217](https://cs217.stanford.edu/) | 数据复用、量化、加速器与系统权衡 | 同时记录算法精度、访存量与实测性能 |
| EE215A 集成电路设计自动化 | EDA 算法教材与 [OpenROAD](https://theopenroadproject.org/) | 图算法、优化与物理设计 | 从小规模算法和合法性检查开始 |

更多扩展见 [体系结构](/learning/computer-architecture/general-purpose-systems)、[EDA 算法](/learning/eda/resources)、[AI 硬件](/learning/computer-architecture/heterogeneous-systems)。教材尽量通过图书馆、作者或出版社的合法渠道获取；公开课某些学期的作业、视频可能不开放。

## 实践：把资源变成作品

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [开源 EDA 工具链](/tools/open-source/) | 本地实验 | 入门 | 不依赖商用许可证，先完成 HDL 仿真与波形观察 |
| [EDA 环境与 Linux](/tools/development/) | 环境与工程方法 | 入门—进阶 | 使用课程环境前，先掌握调度、日志和版本管理 |
| [一生一芯](/competitions/projects/ysyx) | 系统性项目 | 进阶 | 适合已有 C、体系结构和 HDL 基础后长期投入 |
| [科研入门](/research/) | 阅读与研究方法 | 进阶 | 把“读懂一个资源”转化为可复现的问题与证据 |

建议采用“读一节 → 独立做一个小实验 → 检查结果 → 写一段解释”的循环。数字方向可交付带测试平台的 FIFO；模拟方向可交付含工作点、交流和瞬态分析的放大器报告；体系结构方向可交付固定工作负载下的 Cache 参数比较。**截图不是全部证据**，至少保留源码、输入、版本、运行命令、日志和结论适用范围。

课程作业应遵守学术诚信要求。网上答案、自动生成代码可以帮助定位知识点，但不能替代自己的设计、推导与允许范围内的独立提交。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)：课程名称与开课背景。
- 公开课及工具的官方主页见上表；对照关系为本站学习建议，而非学校发布的课程等价表。
