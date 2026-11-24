---
title: 参与共建
description: 从报告问题、网页纠错到本地预览、组件复用和 PR，参与维护有来源、尊重隐私的上科大芯知库。
---
# 参与共建

仓库：[ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io)。修正一处错字、补充一条引用、撰写一段带年份的实践经验，都是本项目欢迎的贡献。协作时请遵守[社区行为准则](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io/blob/main/CODE_OF_CONDUCT.md)；更完整的命令与审核标准见[仓库贡献指南](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io/blob/main/CONTRIBUTING.md)。

## 报告问题或推荐资源

在[创建议题](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io/issues/new/choose)中选择错误反馈、资源推荐、内容投稿或功能建议，给出涉及的页面、原始来源，以及希望解决的问题。开始长篇投稿前，可以先到[现有议题](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io/issues)查看是否有人正在整理同一主题。没有 Git 经验也可以只提交议题，由维护者协助整理。

## 直接在网页上修改

1. 打开目标文章，点击页面底部的“在 GitHub 上编辑此页”，进入该页面的源文件。
2. 登录 GitHub，按提示 Fork（派生）仓库，在新分支上修改 Markdown，用预览查看标题、列表与链接。
3. 保存到自己的分支，向上游仓库的 `main` 发起 Pull Request（合并请求），说明改动理由并附上资料来源。
4. 查看 **Checks** 中的构建检查和维护者反馈。需要补充时继续向同一分支提交；合并后网站自动发布。

## 本地预览

准备 Git 与 Node.js 22（含 npm），将自己的 Fork 克隆到本地后执行：

```bash
git clone FORK_URL ic-wiki
cd ic-wiki
npm ci
npm run dev
```

浏览器打开终端显示的本地地址，保存 Markdown 后页面自动刷新。提交前运行一次 `npm run build`：它与 PR 检查使用同一命令，遇到死链、Markdown 或 Vue 模板错误时会失败。依赖安装失败先核对 Node.js 版本与 npm 报错。

## 目录结构与修改入口

```text
docs/
  index.md                 首页
  explore-ic/              认识 IC：科普基础、知识地图与 research-directions/ 科研方向
  learning/                学习地图：基础知识与五个专业方向的路线和自学资源
  shanghaitech/            上科大 IC：courses/ 课程、faculty/ 教师、research-groups/ 课题组与平台、荣誉与培养项目
  research/                科研探索：进组、读论文、会议期刊、工具与写作
  competitions/            竞赛与项目：赛事指南、参赛经验、工程项目
  career/                  升学与职业：国内外升学、实习与就业
  tools/                   工具与资源：EDA 工具、开发环境、开源项目、友链
  community/               社区与共建：关于本站与贡献指南
  public/                  公开静态资源（public/assets/credits.txt 记录第三方作品署名）
  .vitepress/
    config.mts             导航、侧边栏与站点配置
    data/
      faculty.ts           教授与课题组数据
      courses.ts           课程数据
      directions.ts        研究方向分类
    theme/                 主题与全局组件
```

先改已有页面，避免把同一份教授或课程表复制到多个地方。静态资源只提交有公开授权、体积适当且确实使用的文件，不上传个人备份、完整工具安装包或实验输出目录。

### 新增页面与侧边栏

先确认主题是否已有承载页面。新增页面放在对应板块，使用稳定的简短文件名；目录首页为 `index.md`，站内链接用绝对路径且不带 `.md`。例如 `docs/explore-ic/research-directions/eda.md` 对应 `/explore-ic/research-directions/eda`。

在 `docs/.vitepress/config.mts` 的 `sidebar` 中找到对应路径分组，沿用已有 `items` 写法加入条目，例如：

```ts
{ text: 'EDA 与设计自动化', link: '/explore-ic/research-directions/eda' }
```

这是既有路径的写法示例，不应再重复新增同名条目。全新路径先与维护者确认，并同步相关总览入口；若需要新增板块，再讨论导航，避免个人 PR 擅自重排全站结构。

### 修改教授、课程与方向数据

教授事实集中修改 `docs/.vitepress/data/faculty.ts`，课程事实集中修改 `courses.ts`，方向分类在 `directions.ts`。沿用文件内接口、字段和标识符，附官方来源与核实年份。教师研究方向应尽量忠于公开介绍，不从论文标题推断新职称或实验室名称。

修改课程时核对课程代码、学分、先修、开课学期和当年教师，不用往届笔记覆盖新学年开课表。新增方向属于跨页面变更，应同时检查方向数据中的链接、对应页面及组件使用；不要只新增一个标签。不会改 TypeScript 时，可在 Issue 中给出准确条目和来源，请维护者处理。

## 写作规范摘要

- 简体中文，标题不加 emoji；专业术语首次出现尽量给出英文，中英文及数字之间加空格。
- frontmatter 只写 `title` 与 `description`，正文一级标题与 title 一致；通常以 800–3000 汉字讲清楚，不为凑字数堆材料。
- 优先写上科大独有信息；通用知识精炼说明并给可靠入口，不复制他站全文。
- 本校事实来自官方培养方案、开课表、师资库、课题组主页及正式通知；写清年份、适用项目和来源。不确定就省略或注明以官网为准。
- 经验与事实分开。往届经验注明学期版本，并提醒以当学期课程大纲为准，不写教师性格评价或未经核实的传闻。
- 站内链接使用已规划、实际存在的页面；外链优先官网，深层地址需现场核实。上科大特色页面末尾增加“参考与来源”。
- 不在普通 Markdown 正文写可能被 Vue 解释的双花括号插值或裸 HTML 片段；展示组件语法请放代码块。公式、代码与图表的写法见[文章写作示例](/community/writing)。

## 可复用组件与容器

教授和课程信息使用全局组件，不再手写重复大表。以下语法放入正文即可使用：

```vue
<FacultyList dir="eda" />
<FacultyList dir="digital" primary />
<CourseTable area="digital" />
<CourseTable codes="EE115B,EE113,EE291F" />
```

`FacultyList` 不写 `dir` 时显示全部；`primary` 只显示主方向。方向 ID 为 `devices`、`photonics`、`mems`、`analog`、`power`、`rf`、`digital`、`ai-hw`、`arch`、`security`、`eda`。

`CourseTable` 的 `area` 可选 `basic`、`digital`、`arch`、`ai`、`analog`、`rf`、`power`、`device`、`photonics`、`mems`、`eda`；注意课程与教授的相关 ID 并不完全同名。`codes` 必须与数据文件中的课程代码完全一致。`<CourseTable filter />` 仅用于课程总览；`<TopologyGraph />` 仅用于科研方向总览，不在其他页面复制交互拓扑。

经验征集统一使用下面的容器，每页通常一处即可：

```md
::: info 征集
欢迎通过[参与共建](/community/contributing)补充注明年份的公开经验。
:::
```

提示、重要限制和补充内容可用 `tip`、`warning`、`details` 容器。关系图用 Mermaid，节点不超过 25 个，特殊字符标签加双引号；图应帮助理解关系，不只用于装饰。

## 内容模板

新增页面可从仓库 [`templates/`](https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io/tree/main/templates) 中复制最接近的一份：课程、课题组、研究方向、学习路线和经验分享。复制到对应板块后，删除模板中的提示文字，再按上文加入侧边栏。没有证据的事实不要补猜测，不把空白模板当成正文提交。

## PR 流程

1. Fork 仓库并创建聚焦单一主题的分支；小改动也可从 GitHub 网页端发起。
2. 编辑页面或集中数据，附来源、年份与必要的适用范围。
3. 运行 `npm run build`，在本地预览检查标题、表格、容器、公式、图和链接；涉及组件或配置时说明影响范围。
4. 按 PR 模板写清改了什么、为什么改、事实来源和实际做过的检查。未运行的检查如实注明，并查看 **Checks** 中 **docs-build** 的结果。
5. 根据评审修改，保持 PR 只包含相关文件，不夹带缓存、依赖目录、构建产物和个人配置。合并后由部署工作流发布。

## 隐私、版权与事实核查

不公开学生姓名、成绩、学号、账号密码、私人邮箱、聊天记录、内网地址和未授权录音；不披露未发表论文、保密网表、PDK、商业软件许可或企业数据。教授仅写公开学术信息，不评价“好不好进组”等个人印象。

截图上传前检查边缘、文件路径和通知栏；打码不充分时宁可重做一张公开示意图。发现敏感内容应联系维护者处理，不在公开 Issue 中再次传播原文。转载前核对独立许可，本站的 CC BY 4.0 不会覆盖第三方材料；引用、翻译或改编须保留作者、原始出处、许可及修改说明。

AI 可以辅助整理公开材料与语言，但贡献者必须核对原文、链接和数字，不能用生成内容充当来源。提交原创文字意味着同意按[本站许可证说明](/community/)分享，并确认有权投稿；不清楚授权时只提供原始链接与自己的简短说明。
