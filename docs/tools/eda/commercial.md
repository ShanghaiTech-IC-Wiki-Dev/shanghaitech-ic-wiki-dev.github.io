---
title: 商用 EDA 工具链
description: 对照数字与模拟设计环节认识商用工具，并连接上科大 EE113L 和 Cadence 实训的往届流程。
---
# 商用 EDA 工具链

商用工具首先按任务理解，再记产品名。同一环节的工具通常有相似目标，但脚本、数据库、许可功能和工艺认证不一定兼容。下表是常见对应，不是采购推荐，也不表示上科大当前提供全部授权；产品及版本以厂商、平台和课程公告为准。

## 数字设计、验证与实现

| 环节 | 常见工具 | 主要工作与应读的结果 |
| --- | --- | --- |
| RTL / 门级仿真 | Synopsys VCS、Cadence Xcelium、Siemens Questa | 编译设计与测试平台、执行激励；检查日志、断言、覆盖和输出 |
| 波形与设计调试 | Synopsys Verdi | 连接波形、源码与层次；调试器通常需配合仿真器及相应数据库 |
| 静态规则检查与跨时钟域检查 | Synopsys SpyGlass Lint / CDC | 检查结构、编码与 CDC 问题；结论依赖时钟、复位和豁免设置 |
| 逻辑综合 | Synopsys Design Compiler（DC）、Cadence Genus | 把 RTL 映射到库单元；检查网表、时序、面积和未满足约束 |
| 可测性设计（DFT） | Synopsys TestMAX、Cadence Modus、Siemens Tessent | 扫描、测试结构及测试生成等；具体能力取决于产品和授权模块 |
| 布局布线（P&R） | Synopsys IC Compiler II（ICC2）、Cadence Innovus | 布图规划、放置、时钟树、布线与优化；关注拥塞、时序和物理合法性 |
| 静态时序分析（STA） | Synopsys PrimeTime、Cadence Tempus | 在指定工艺角与约束下检查建立、保持等时序要求 |
| 寄生参数提取 | Synopsys StarRC、Cadence Quantus | 根据布局布线和提取规则生成寄生电阻、电容等数据 |
| 物理验证 | Siemens Calibre、Cadence Pegasus、Synopsys IC Validator | 设计规则检查与版图网表一致性检查等；依赖匹配的规则文件 |
| 功耗与电源完整性 | Synopsys PrimePower、Cadence Voltus | 功耗分析；Voltus 也用于电压降、电迁移等分析，不能把不同检查等同起来 |

物理验证常见缩写包括设计规则检查（Design Rule Checking，DRC）和版图与原理图一致性检查（Layout Versus Schematic，LVS）。时序、功耗和物理验证需要不同输入，不能因为某个环节没有报错，就认为其他环节自动通过。

## 模拟与定制电路

| 环节 | 常见工具 | 主要工作与边界 |
| --- | --- | --- |
| 原理图与定制版图 | Cadence Virtuoso | 管理器件、原理图、版图和设计数据库；并非仿真求解器本身 |
| 电路仿真 | Cadence Spectre、Synopsys HSPICE | 直流、交流、瞬态、噪声等电路分析；模型、分析设置与收敛都要检查 |
| 定制版图验证与提取 | Calibre 等配套工具 | DRC、LVS、寄生提取及后仿真；具体流程依课程 PDK 与授权配置 |

模拟和数字工具并非完全割裂。数字标准单元也需要晶体管级设计、仿真与版图验证；大规模数字芯片则主要使用标准单元自动实现，不能把手工版图方法直接等同于整个芯片的后端流程。

## 在上科大课程中怎样遇到这些工具

<CourseTable codes="EE113L,EE291F" />

### EE113L：从原理图到版图后仿真

往届 EE113L Lab0 笔记记录的核心工具是 **Virtuoso + Spectre / HSPICE + Calibre**。实验路线包含反相器与复杂逻辑门的设计、版图、DRC / LVS、寄生提取和后仿真。因此，即使课程名是“数字集成电路 I 实验”，也需要理解定制电路和晶体管级方法。

这一工具记录来自往届材料，**资料未注明统一学期版本**，不代表今后实验必然使用同一组合。具体账号、环境、PDK、版本与提交方式，以当学期 [EE113 / EE113L](/shanghaitech/courses/ee113) 通知为准。

### Cadence 暑期实训：数字实现与签核

维护者的 **2026 年暑期实训版本**笔记记录了以下对应：

| 流程 | 工具 | 学习时重点 |
| --- | --- | --- |
| 逻辑综合 | Genus | RTL、库、约束与综合报告 |
| 布图规划、布局、时钟树、布线 | Innovus | 物理约束、拥塞与时序优化 |
| 寄生提取 | Quantus | 提取数据与后续分析输入 |
| 时序签核分析 | Tempus | 工艺角、时序路径与约束 |
| 物理签核检查 | Pegasus | 规则文件与违规定位 |
| 功耗 / 电源完整性分析 | Voltus | 分析场景、活动率与电源网络 |

这不是对每一届实训内容或签核深度的承诺。学习建议与课程介绍见 [Cadence 暑期实训](/shanghaitech/courses/cadence-summer)，环境操作见 [EDA 环境](/tools/development/)。

## 不要只保存最后一张截图

一次实验至少记录工具版本、工艺库和角、脚本、约束、输入版本、日志和结果报告。遇到工具报错，先定位最早的有效错误，区分许可证失败、缺文件、语法错误和设计不满足规格，不要把所有问题都当作“软件没装好”。生成数据库成功也不意味着目标频率、功耗或验证条件已满足。

PDK、标准单元库、许可证配置和课程受限材料不得公开上传；需要分享时先确认授权范围，只提供允许公开的最小问题描述。

## 参考与来源

- [上科大信息学院 2026–2027 学年开课计划](https://faculty.sist.shanghaitech.edu.cn/office/Academics/Courses/SIST_2026-2027_Courses.htm)。
- 本地往届资料：EE113L Lab0《Introduction to IC Design & EDA Flow》与 2026 年《Cadence 集成电路暑期实训》笔记；仅提炼工具与流程，不公开环境凭证。
- 厂商官方主页：[Cadence](https://www.cadence.com/)、[Synopsys](https://www.synopsys.com/)、[Siemens EDA](https://eda.sw.siemens.com/)。
