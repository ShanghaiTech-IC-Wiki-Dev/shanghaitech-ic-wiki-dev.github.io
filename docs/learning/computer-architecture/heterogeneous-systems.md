---
title: 领域专用与异构系统（AI系统）
description: 连接高效深度学习、CUDA、DNN 加速器与大模型系统，建立正确性和性能证据。
---
# 领域专用与异构系统（AI系统）

AI 硬件需要同时理解模型在算什么、数据在哪里移动、硬件怎样执行。建议先学矩阵乘法和存储层次，再区分两条路线：**在现有 GPU 上优化程序**，与**设计新的加速器或微架构**。两者互相帮助，但 CUDA 跑得快不能直接证明某个 RTL 设计更好。方向全景见 [AI 硬件研究](/explore-ic/research-directions/ai-hardware)。

## 入门：模型、数据和计算成本

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [MIT 6.5940 / EfficientML](https://efficientml.ai/) | 高效 AI 公开课入口 | 入门—进阶 | 覆盖 TinyML、高效 AI 计算相关主题；按学期查看量化、压缩与部署材料 |
| Sze、Chen、Yang、Emer《Efficient Processing of Deep Neural Networks》 | 教材与教程 | 进阶 | 学习数据流、存储层次、稀疏与能耗；相关资源可从 [MIT EEMS](https://eems.mit.edu/) 进入 |
| [PyTorch](https://pytorch.org/) | 深度学习框架 | 入门—进阶 | 能实现、检查并测量一个小网络，比只调用训练脚本更重要 |
| [NVIDIA CUDA](https://developer.nvidia.com/cuda-zone) | 并行编程与官方文档 | 入门—进阶 | 从线程索引、内存层次、同步和错误检查开始，而非先追求极限优化 |

先会计算一个矩阵乘法或卷积的运算量、参数量与中间激活大小。明确数据类型、批大小、精度指标和输入形状；峰值 TOPS 不能直接换算成应用吞吐，模型变小也不保证延迟按比例下降。定量思路可结合 [体系结构自学](/learning/computer-architecture/general-purpose-systems) 的 Roofline 学习。

## 进阶：加速器和大模型系统

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| [Stanford CS217](https://cs217.stanford.edu/) | 机器学习硬件加速器课程 | 进阶 | 关注并行性、局部性、低精度、数据流和系统级权衡；实践方式随学期变化 |
| [Stanford CS336](https://cs336.stanford.edu/) | 从零构建语言模型课程 | 进阶—深入 | 训练、资源核算、GPU 优化与分布式系统；需要 Python、深度学习和系统基础，不是 HDL 入门课 |
| 《Programming Massively Parallel Processors》 | CUDA 教材 | 进阶 | 从并行模式学习矩阵乘法、归约和内存优化，结合当前 CUDA 文档使用 |
| [Timeloop](https://github.com/NVlabs/timeloop)、[Accelergy](https://accelergy.mit.edu/) | 加速器建模与能耗估计 | 进阶—深入 | 探索映射、数据复用与存储层次；结果是模型估计，须说明配置与边界 |
| [Gemmini](https://github.com/ucb-bar/gemmini) | 开源矩阵加速器生成器 | 进阶—深入 | 适合研究阵列、片上存储与软硬件接口，先理解配套系统及运行流程 |
| [NVDLA](https://nvdla.org/) | 开源深度学习推理加速器 | 进阶—深入 | 阅读模块划分、数据通路与软件接口，按官方支持的工作负载和平台使用 |

阅读加速器论文时，重点比较外存流量、片上容量、利用率和支持的运算集合。不同工艺、频率、精度、批大小和模型准确率下的数字，不能直接排一个“性能榜”。使用模拟器或高层模型时，也不能将预测能耗表述为芯片实测。

## 实践：先正确，再解释性能

| 资源 | 类型 | 难度 | 说明 |
| --- | --- | --- | --- |
| CUDA vector add / SAXPY | 最小编程练习 | 入门 | 写边界检查，对照 CPU 参考结果，处理非整倍数长度 |
| naive 与 tiled matmul | 性能实验 | 进阶 | 固定输入和数据类型，比较数据复用与内存访问，不只比较代码长度 |
| reduction 与同步实验 | 并行正确性实验 | 进阶 | 理解线程块独立性、归约顺序和浮点误差，不以偶然输出正确作为证明 |
| [Nsight 工具入口](https://developer.nvidia.com/tools-overview) | 性能分析工具 | 进阶 | 用时间线定位瓶颈，再用内核指标解释访存、同步或资源限制 |
| Gemmini 小规模映射实验 | 加速器项目 | 深入 | 固定矩阵和数值格式，比较分块、数据流与存储开销，保存参考结果 |

可按四个学习块推进：线程与索引、内存与分块、同步与归约、完整小项目。每块只保留一个主要变量。GPU 计时需要预热和正确同步，区分内核时间、传输时间与端到端时间；报告设备、软件版本和统计方法。浮点对比应先确定合理误差标准，不因失败而临时放宽标准。

## 与上科大课程配合

<CourseTable codes="EE219,CS290U,CS290W" />

[EE219](/shanghaitech/courses/ee219) 与加速器和系统思维相连接；[CS290U](/shanghaitech/courses/cs290u) 及硬件部署相关课程可与模型工程实践配合。具体实验、工具和先修要求以当学期大纲为准。本文实践顺序参考维护者往届 CUDA 自学笔记，仅作为可裁剪建议，不承诺固定周数即可完成。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)。
- MIT 6.5940、Stanford CS217 / CS336 与开源项目的官方入口见上表。
