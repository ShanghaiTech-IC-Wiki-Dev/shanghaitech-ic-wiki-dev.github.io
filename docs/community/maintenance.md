---
title: 站点维护
description: 本站的构建、发布、分支保护与依赖更新流程。
---
# 站点维护

维护者通过 Pull Request（合并请求）审阅内容和配置。合并到 `main` 后，GitHub Actions 用 Node.js 和 VitePress 生成静态 HTML，并将 `docs/.vitepress/dist/` 交给 GitHub Pages 发布。每次构建都从仓库中的 Markdown、`package.json` 与 `package-lock.json` 开始。

## 站点由什么组成

| 位置 | 作用 |
| --- | --- |
| `docs/.vitepress/config.mts` | 站点标题、顶部导航、侧边栏、本地搜索、编辑链接、Markdown 与 Mermaid 配置 |
| `docs/.vitepress/data/` | 教授（`faculty.ts`）、课程（`courses.ts`）与方向（`directions.ts`）的唯一数据源 |
| `docs/.vitepress/theme/` | 配色与全局组件：首页、方向拓扑图、教授卡片、课程表 |
| `.github/workflows/ci.yml` | PR 检查 **Documentation CI / docs-build**，以只读权限运行 `npm run build` |
| `.github/workflows/deploy.yml` | 合并到 `main` 后构建并部署到 GitHub Pages |

中文全文搜索由 VitePress 的本地索引在构建期生成，不依赖外部服务。LaTeX 公式由 `markdown-it-mathjax3` 在构建期排版为 SVG；Mermaid 图由 `vitepress-plugin-mermaid` 打包进站点，在读者打开含图页面时渲染。升级依赖后可用[文章写作示例](/community/writing)验证这些功能。

## 首次发布与重新部署

1. 打开仓库 **Settings → Pages → Build and deployment**，在 **Source** 选择 **GitHub Actions**。仓库已经提供部署工作流。[GitHub Pages 发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
2. 在 PR 的 **Checks** 查看 **Documentation CI / docs-build**。构建通过后，维护者检查引用、版权和导航，再按仓库审核规则合并。
3. 合并后打开 **Actions → Deploy to GitHub Pages**，选择与合并提交相符的运行。先确认 **build** 成功上传静态文件，再确认 **deploy** 成功。在运行摘要中打开 **github-pages** 环境显示的网址，点开一个板块，搜索一个中文词，确认当前版本可用。[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
4. 需要从当前正式版本重新发布时，在同一工作流选择 **Run workflow**，将分支选为 **main**。如果本次修改需要回退，通过新的 PR 撤销相关提交，合并后会自动部署。

构建失败时，展开第一个红色步骤。`npm ci` 失败通常是 `package.json` 与 `package-lock.json` 不一致，在本地重新 `npm install` 并提交更新后的锁文件。VitePress 报告的死链会指出源文件与目标路径，可在本地用 `npm run build` 复现。读取 Pages 配置失败时，先核对发布源。部署被挂起时，检查 **Settings → Environments → github-pages** 中已有的分支限制或审批要求。

## 保护 main 分支

首次部署和 PR 检查成功后，建议由仓库管理员进入 **Settings → Rules → Rulesets → New ruleset → New branch ruleset**，将名称设为 `protect-main`，**Enforcement status** 选 **Active**。在 **Target branches → Add target** 添加匹配 `main` 的规则，再保存下列选项。[GitHub Rulesets 创建说明](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)

| 选项 | 建议设置与效果 |
| --- | --- |
| Require a pull request before merging | 审批数设为 **1**，由另一位有审核权限的维护者批准。 |
| Require status checks to pass | 添加 GitHub Actions 产生的 **docs-build**。如果列表里还找不到，先让一个面向 `main` 的 PR 成功跑完 CI。 |
| Block force pushes | 勾选，阻止强制推送改写正式分支历史。 |
| Restrict deletions | 勾选，保护正式分支免于删除。 |

规则建议只应用于本仓库。保存后，可在下一份内容 PR 中核对未通过审核时的合并按钮状态，以及 **Checks** 中的构建结果。[GitHub 分支规则选项](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

## 更新依赖

依赖版本记录在 `package-lock.json` 中。升级时在独立分支运行 `npm install -D 包名@版本`，再执行 `npm run build` 与 `npm run preview`，回归检查首页拓扑图、中文搜索、一张 Mermaid 图、写作示例中的公式以及手机宽度下的导航。`vitepress-plugin-mermaid` 声明了它支持的 Mermaid 主版本，升级 Mermaid 前先核对插件的兼容范围。

更新 Actions 时，两个工作流中的 `uses` 指向官方发布对应的完整提交 SHA，后面的注释记录版本号。

如果将来更改组织名或仓库名，更新 `docs/.vitepress/config.mts` 中的仓库地址（编辑链接与社交链接）、README 的访问入口，并核对 GitHub Pages 的发布源。发布后从首页进入一篇文章，确认搜索、编辑入口和分享出去的网址均指向新站。
