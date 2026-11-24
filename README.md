# ShanghaiTech IC Wiki

上科大芯知库由上海科技大学 IC 荣誉项目学生发起，面向初学者、在校生、校友及其他集成电路爱好者。我们希望把选方向、学课程、做项目时反复遇到的问题整理成可检索、可引用、可持续修订的中文资料，并突出上科大独有的信息：课程承接、教授与课题组、科研与工艺平台、培养项目。

**网站**　[shanghaitech-ic-wiki-dev.github.io](https://shanghaitech-ic-wiki-dev.github.io/)

灵感来自 [NJU 集成全家桶](https://njuic-students.github.io/) 与 [IC 自学指南](https://crys-chen.github.io/ic-guide/)。

## 从哪里读起

| 板块 | 可以在这里找什么 |
| --- | --- |
| [认识 IC](docs/explore-ic/index.md) | 集成电路是什么、设计流程知识地图、产业链、器件与工艺、前沿、术语表、11 个科研方向 |
| [学习地图](docs/learning/index.md) | 上科大课程承接网络；工艺与器件、电路、系统架构、算法与编程、EDA 五个方向的路线与自学资源 |
| [上科大 IC](docs/shanghaitech/index.md) | 课程、教师、课题组与科研平台、IC 荣誉项目、特色培养项目 |
| [科研探索](docs/research/index.md) | 进组、读论文、会议期刊、工具与写作 |
| [竞赛与项目](docs/competitions/index.md) | 赛事指南、参赛经验、工程项目与一生一芯 |
| [升学与职业](docs/career/index.md) | 推免、考研、境外申请、实习、岗位与企业 |
| [工具与资源](docs/tools/index.md) | EDA 工具全景、商用与开源工具链、开发环境、友链 |
| [社区与共建](docs/community/index.md) | 投稿入口、写作示例、贡献者署名与维护说明 |

标有“征集”的小节列出了欢迎补充的经验。你可以从补一条有出处的资源、修正一个失效链接开始。

## 本地预览

需要 Node.js 22（含 npm）。

```bash
npm ci
npm run dev       # 开发预览，保存后自动刷新
npm run build     # 与 PR 检查相同的构建，产物在 docs/.vitepress/dist
npm run preview   # 预览构建产物
```

## 目录结构

```
docs/
├── index.md                 首页（HomePage 组件）
├── explore-ic/  learning/  shanghaitech/  research/
├── competitions/  career/  tools/  community/
├── public/assets/           首页照片与第三方作品署名（credits.txt）
└── .vitepress/
    ├── config.mts           导航栏、侧边栏与站点配置
    ├── data/                结构化数据（教授、课程、科研方向）
    └── theme/               配色与组件（拓扑图、教授卡片、课程表）
templates/                   新文章模板
```

- 教授与课题组：`docs/.vitepress/data/faculty.ts`（来自信息学院教师主页）
- 课程表：`docs/.vitepress/data/courses.ts`（来自信息学院年度开课表）
- 科研方向：`docs/.vitepress/data/directions.ts`

修改数据后，首页拓扑图、教授卡片和课程表会同步更新。

## 构建与发布

VitePress 读取 `docs/` 中的 Markdown 与 [站点配置](docs/.vitepress/config.mts) 生成静态页面；死链和模板错误会让构建失败。向 `main` 发起 Pull Request 会触发 GitHub Actions 的构建检查（`docs-build`）。合并后，发布工作流重新构建站点并部署到 GitHub Pages（仓库 **Settings → Pages → Source** 需选择 **GitHub Actions**）。[站点维护说明](docs/community/maintenance.md)

## 参与共建

- **纠错或提案**　打开仓库的 **Issues → New issue**，选择内容投稿、资源推荐、错误反馈或功能建议。
- **讨论选题**　在仓库的 **Discussions** 发起讨论。有了具体修改后可附上讨论链接发起 PR。
- **直接写文章**　复制合适的文章模板，修改 Markdown，并通过 Fork（个人副本）提交 PR。具体步骤见[贡献指南](CONTRIBUTING.md)、[文章模板](templates/)和[社区行为准则](CODE_OF_CONDUCT.md)。

## 许可与声明

网站代码、配置、工作流与脚本采用 [MIT License](LICENSE)。原创文章、Markdown 模板、项目说明及标明为原创的配图采用 [CC BY 4.0](LICENSE-CONTENT)。再使用原创内容时请注明作者、出处、许可与所作修改。第三方素材、依赖及外部资源遵循各自的许可，具体标注优先。

本站由学生独立发起和维护，不是学校或院系的官方站点。文章仅代表作者观点。课程、招生、招聘及课题组信息请以上海科技大学、相关院系或发布单位的最新公告为准。
