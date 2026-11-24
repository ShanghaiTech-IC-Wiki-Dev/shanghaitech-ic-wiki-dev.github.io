---
title: VSPLab：VLSI 信号处理实验室
description: 从公开研究、课程和论文认识娄鑫老师的 VSPLab，以及数字芯片与视觉、三维重建和渲染的交叉路径。
---
# VSPLab：VLSI 信号处理实验室

::: tip 课题组介绍页模板
这是课题组介绍页模板，欢迎其他课题组参照提交：公开的 PI 信息、研究问题、课程衔接、入门建议与官方来源。请通过 [参与共建](/community/contributing) 补充，不收录私人联系方式、学生个人信息或导师性格评价。
:::

VLSI 信号处理实验室（VLSI Signal Processing Lab，**VSPLab**）关注数字集成电路与系统，面向图像、图形和视觉应用研究算法与硬件协同。它提供了一个认识上科大 IC 交叉研究的具体入口：从计算任务出发，追踪算法、数据流、硬件架构到芯片实现之间的关系，而不把「算法研究」与「硬件实现」简单分开。

本文于 **2026-11** 核对学院个人页及课题组网站；研究计划、课程安排和科研参与机会以当前官方信息为准。

## PI 简介

娄鑫是上海科技大学信息科学与技术学院**长聘副教授、研究员、博士生导师**。学院公开简介记载，他于 2010 年、2012 年和 2016 年分别获得浙江大学学士、瑞典皇家理工学院硕士和南洋理工大学博士学位；博士毕业后在南洋理工大学 VIRTUS 集成电路设计中心任研究科学家，于 2017 年 2 月全职加入上海科技大学。

学院主页列出的研究方向为：**数字超大规模集成电路（Very Large Scale Integration，VLSI）设计，智能视觉，三维重建与渲染芯片设计**。了解当前工作时，建议同时查看学院个人页和实验室近期论文，而不要只读早年的招生材料。

## 研究方向：从视觉算法到专用硬件

### 数字 VLSI 与高能效计算

实验室面向高性能计算任务，研究数字芯片架构、实现方法与能效优化。中心介绍材料说明，实验室通过 IC 芯片设计、现场可编程门阵列（Field-Programmable Gate Array，FPGA）及其他嵌入式系统构建原型。它们是不同的实现与验证载体，FPGA 演示不等于已经完成 ASIC 流片。

### 智能视觉与图像处理

公开论文可见 RAW 图像特征提取与目标检测、立体匹配、非视域成像以及雷达人体活动识别等主题。这类问题要求同时考虑任务质量、计算复杂度、数据搬运和硬件资源，适合沿「算法中哪一步最耗资源、能否改变计算与存储组织」的线索阅读。

### 三维重建、神经渲染与图形计算

公开研究包括神经辐射场（Neural Radiance Fields，NeRF）专用架构、体渲染加速、隐式神经表示医学图像重建，以及三维高斯泼溅（3D Gaussian Splatting，3DGS）相关渲染方法。**3DGS 相关论文与神经渲染硬件加速同属研究版图，但不能据此宣称每一项 3DGS 方法都已有流片芯片。** 具体成果应以对应论文的实现平台和实验部分为准。

## 课程：从入门电路到数字实现流程

课题组课程网站目前突出两门课程：

- [SI100B 信息科学技术导论](/shanghaitech/courses/si100b) 的 **EE Part**：以数字电路与计算机硬件基础为入口，通过课堂与 Logisim 实验理解门电路到基本计算单元的设计。SI100B 是多人参与的课程，EE Part 不能代替整门课程的全部内容。
- [EE291F 数字 VLSI 设计流程](/shanghaitech/courses/ee291f)：连接 Linux、EDA 工具、项目管理、工艺文件、时序分析与综合等工程知识。2026–2027 学年开课表将其列为研究生课程，先修为 EE113；授课与选课安排以当学期为准。

<CourseTable codes="SI100B,EE291F" />

学院个人页还列有 EE218 数字 VLSI 设计；这属于公开教学履历，不据此断言它在当前学年开设。实验室网站也列出成员参与其他课程教学建设的情况，参与习题课、助教或资料建设与担任课程主讲教师是不同角色。

## 适合什么背景的同学

以下是根据研究内容给出的**学习匹配建议，不是实验室公布的招生门槛**：

- **数字电路背景**：对可综合 RTL、流水线、数值精度、时序和芯片实现感兴趣，愿意把功能正确的模块进一步做成可评估的设计。
- **计算机与视觉背景**：愿意从模型效果继续追问存储访问、并行性、计算量和能耗，而不只停留在调用框架。
- **信号处理与应用背景**：对图像、成像或重建问题感兴趣，愿意补充编程、数字逻辑及硬件验证能力。

不要求先掌握所有领域再交流；更有帮助的是带着一个真实完成的小项目、清晰的先修情况和可持续投入的时间，与老师讨论合适起点。

## 进组前怎样准备

建议以 **[EE115B](/shanghaitech/courses/ee115b) → [EE113](/shanghaitech/courses/ee113) → [EE291F](/shanghaitech/courses/ee291f)** 为数字芯片学习主线。这是本站建议的能力递进路径，具体先修条件以课程大纲为准。

1. **数字基础与 Verilog。** 能区分组合与时序逻辑，写基本模块和测试平台，解释复位、流水线与仿真波形。练习入口见 [数字电路自学](/learning/digital-ic/resources)。
2. **电路与实现。** 在 EE113 中把逻辑功能与晶体管、延迟、功耗、面积联系起来；在 EE291F 中理解综合、约束和设计流程，不只记工具命令。
3. **系统视角。** 配合 [CS110](/shanghaitech/courses/cs110) 理解处理器、存储层次和性能瓶颈；对加速器感兴趣可进一步了解 [EE219](/shanghaitech/courses/ee219)。
4. **后端实践。** 关注 [Cadence 暑期实训](/shanghaitech/courses/cadence-summer)，通过实际工程理解从 RTL 到版图的链条。工具熟练度不能代替电路与算法基础，也不是参与科研的唯一评价标准。
5. **论文与复现。** 选一篇公开论文，先说明任务、瓶颈、核心改动和评价指标，再做可复现的小实验。可参考 [论文阅读](/research/paper-reading) 与 [EDA 环境](/tools/development/)。

## 代表性论文方向

以下题目均可在学院个人页或 VSPLab 公开论文目录查到。这里只列研究入口，不复制完整作者名单；发表状态与版本请以论文页、DOI 和出版方为准。

| 主题 | 可从哪些公开工作开始 | 阅读时关注什么 |
| --- | --- | --- |
| NeRF 专用架构 | *ICARUS: A Specialized Architecture for Neural Radiance Fields Rendering*（ACM TOG / SIGGRAPH Asia，2022） | 渲染流水线如何映射到架构，计算与存储如何组织 |
| 神经渲染硬件 | *Ray Reordering for Hardware-Accelerated Neural Volume Rendering*（TCSVT，2024）；*An Energy-Efficient Edge Coprocessor for Neural Rendering With Explicit Data Reuse Strategies* | 光线重排、数据复用与能耗之间的关系 |
| 3DGS 渲染 | *Duplex-GS: Proxy-Guided Weighted Blending for Real-Time Order-Independent Gaussian Splatting* | 表示与混合方法如何改变渲染开销和图像质量 |
| 视觉处理器 | *A Block PatchMatch-based Energy-resource Efficient Stereo Matching Processor on FPGA*（TCAS-I，2022） | 算法质量、并行组织与 FPGA 资源约束 |
| 芯片开发方法 | *Scalarium: A Unified Scala-based Co-Simulation Framework for Agile Chip Development*（ASP-DAC，2026） | 仿真协同与工程开发效率怎样评价 |

## 流片与毕业去向：只引用有时间边界的材料

《后摩尔器件与集成系统中心》介绍材料明确写有：**「本实验室提供流片机会」**。同一材料列出的 **2023 年毕业生去向**包括海思半导体、长鑫存储、Vivo、晶晨半导体、思朗科技、北京开源芯片研究院等。

这是历史培养与资源介绍，**不是对当前每位学生的流片、就业或录取承诺**。流片通常仍需具体项目、验证、工艺、经费和时间安排；希望参与的同学应直接向课题组了解当前机会与要求。

## 公开入口

- [VSPLab 首页](https://vsplab.cn/)：PI、研究方向和课程入口。
- [课程资源](https://vsplab.cn/courses/)：SI100B EE Part、EE291F 及教学建设介绍。
- [论文目录](https://vsplab.cn/publications/)：按年份与成果类型检索。
- [公开知识库](https://vsplab.cn/kb/)：FPGA、工具和学习资源入口；设备与计算资源使用仍须依照申请和授权流程。
- [学院个人主页](https://sist.shanghaitech.edu.cn/louxin/main.htm)：公开学术信息及联系方式。

## 参考与来源

- [娄鑫学院个人主页](https://sist.shanghaitech.edu.cn/louxin/main.htm)，2026-11 核对：PI 简介、研究方向、教学与论文。
- [VSPLab](https://vsplab.cn/)、[课程](https://vsplab.cn/courses/)、[论文](https://vsplab.cn/publications/)、[知识库](https://vsplab.cn/kb/)，2026-11 核对。
- [后摩尔器件与集成系统中心介绍材料](https://sist.shanghaitech.edu.cn/_upload/article/files/d0/82/218152ad4bd29c54d8a89d0e6be7/2cba84cd-d335-4a72-8f17-68175bed8e69.pdf)：VLSI 信号处理实验室介绍、流片表述及 2023 年毕业去向，本文依据本地文本摘录整理。
- [2026–2027 学年开课表](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)：当前课程信息以教务系统为准。
