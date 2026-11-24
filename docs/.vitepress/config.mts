import { defineConfig, type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repo = 'https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io'

// 目录结构沿用 MkDocs 版（main@590a342）的板块与路径，保证已有链接继续有效。
const sidebar: DefaultTheme.Sidebar = {
  '/explore-ic/': [
    {
      text: '认识 IC',
      items: [
        { text: '总览', link: '/explore-ic/' },
        { text: 'IC 知识地图：设计全流程', link: '/explore-ic/knowledge-map' },
        { text: '产业链与公司版图', link: '/explore-ic/industry-chain' },
        { text: '器件与工艺入门', link: '/explore-ic/devices-process' },
        { text: '前沿技术速览', link: '/explore-ic/frontier' },
        { text: '常用术语表', link: '/explore-ic/glossary' }
      ]
    },
    {
      text: '科研方向',
      items: [
        { text: '方向巡礼与拓扑', link: '/explore-ic/research-directions/' },
        {
          text: '器件与工艺',
          collapsed: true,
          items: [
            { text: '半导体器件与新型存储', link: '/explore-ic/research-directions/devices' },
            { text: '光电子与集成光子', link: '/explore-ic/research-directions/photonics' },
            { text: 'MEMS、传感与柔性电子', link: '/explore-ic/research-directions/mems-sensors' }
          ]
        },
        {
          text: '电路设计',
          collapsed: true,
          items: [
            { text: '数字 VLSI 与专用芯片', link: '/explore-ic/research-directions/digital-vlsi' },
            { text: '模拟/混合信号与医疗芯片', link: '/explore-ic/research-directions/analog-mixed' },
            { text: '电源管理与功率电子', link: '/explore-ic/research-directions/power' },
            { text: '射频、微波与电磁', link: '/explore-ic/research-directions/rf-em' }
          ]
        },
        {
          text: '系统与架构',
          collapsed: true,
          items: [
            { text: 'AI 芯片与新型计算', link: '/explore-ic/research-directions/ai-hardware' },
            { text: '计算机体系结构与系统', link: '/explore-ic/research-directions/architecture' },
            { text: '硬件安全与隐私计算', link: '/explore-ic/research-directions/hardware-security' }
          ]
        },
        {
          text: '设计方法学',
          collapsed: true,
          items: [{ text: 'EDA 与可制造性设计', link: '/explore-ic/research-directions/eda' }]
        }
      ]
    }
  ],
  '/learning/': [
    {
      text: '学习地图',
      items: [
        { text: '总览：上科大课程网络', link: '/learning/' },
        { text: '基础知识', link: '/learning/fundamentals/' },
        { text: '自学方法与公开课对照', link: '/learning/self-study' }
      ]
    },
    {
      text: '专业方向',
      items: [
        { text: '如何选方向', link: '/learning/directions/' },
        {
          text: '工艺与器件',
          collapsed: true,
          items: [
            { text: '上科大学习路线', link: '/learning/devices-and-process/' },
            { text: '自学资源', link: '/learning/devices-and-process/resources' }
          ]
        },
        {
          text: '电路',
          link: '/learning/circuits/',
          collapsed: true,
          items: [
            { text: '模拟和射频电路：路线', link: '/learning/analog-ic/' },
            { text: '模拟和射频电路：自学资源', link: '/learning/analog-ic/resources' },
            { text: '数字电路：路线', link: '/learning/digital-ic/' },
            { text: '数字电路：自学资源', link: '/learning/digital-ic/resources' }
          ]
        },
        {
          text: '系统架构',
          link: '/learning/computer-architecture/',
          collapsed: true,
          items: [
            { text: '通用计算系统', link: '/learning/computer-architecture/general-purpose-systems' },
            { text: '领域专用与异构系统（AI 系统）', link: '/learning/computer-architecture/heterogeneous-systems' }
          ]
        },
        {
          text: '算法与编程',
          link: '/learning/algorithms-and-programming/',
          collapsed: true,
          items: [
            { text: '编程语言与软件工程', link: '/learning/algorithms-and-programming/languages-and-software-engineering' },
            { text: '算法与计算理论', link: '/learning/algorithms-and-programming/algorithms-and-computation-theory' }
          ]
        },
        {
          text: 'EDA',
          collapsed: true,
          items: [
            { text: '上科大学习路线', link: '/learning/eda/' },
            { text: '自学资源', link: '/learning/eda/resources' }
          ]
        }
      ]
    }
  ],
  '/shanghaitech/': [
    {
      text: '上科大 IC',
      items: [
        { text: '总览', link: '/shanghaitech/' },
        { text: 'IC 荣誉项目', link: '/shanghaitech/honors-program/' },
        { text: '特色培养项目', link: '/shanghaitech/programs' }
      ]
    },
    {
      text: '课程',
      items: [
        { text: '课程总览', link: '/shanghaitech/courses/' },
        {
          text: '专业基础',
          collapsed: true,
          items: [
            { text: 'SI100B 信息科学技术导论', link: '/shanghaitech/courses/si100b' },
            { text: 'EE115A 模拟电路', link: '/shanghaitech/courses/ee115a' },
            { text: 'EE115B 数字电路', link: '/shanghaitech/courses/ee115b' },
            { text: 'EE150 / EE150L 信号与系统', link: '/shanghaitech/courses/ee150' },
            { text: 'CS110 计算机体系结构 I', link: '/shanghaitech/courses/cs110' }
          ]
        },
        {
          text: '芯片设计进阶',
          collapsed: true,
          items: [
            { text: 'EE113 / EE113L 数字集成电路 I', link: '/shanghaitech/courses/ee113' },
            { text: 'EE291F 数字 VLSI 设计流程', link: '/shanghaitech/courses/ee291f' },
            { text: 'EE219 智能计算系统', link: '/shanghaitech/courses/ee219' },
            { text: 'CS290U 深度学习工程实践', link: '/shanghaitech/courses/cs290u' },
            { text: 'Cadence 集成电路暑期实训', link: '/shanghaitech/courses/cadence-summer' }
          ]
        }
      ]
    },
    {
      text: '本科生科研',
      items: [
        { text: '教师', link: '/shanghaitech/faculty/' },
        { text: '课题组与科研平台', link: '/shanghaitech/research-groups/' },
        { text: '课题组介绍：VSPLab', link: '/shanghaitech/research-groups/vsplab' }
      ]
    }
  ],
  '/research/': [
    {
      text: '科研探索',
      items: [
        { text: '总览', link: '/research/' },
        { text: '科研入门', link: '/research/getting-started' },
        { text: '论文阅读', link: '/research/paper-reading' },
        { text: '会议与期刊地图', link: '/research/venues' },
        { text: '科研工具', link: '/research/tools' },
        { text: '学术写作与汇报', link: '/research/writing' }
      ]
    }
  ],
  '/competitions/': [
    {
      text: '竞赛与项目',
      items: [
        { text: '总览', link: '/competitions/' },
        { text: '赛事指南', link: '/competitions/competitions/' },
        { text: '参赛经验', link: '/competitions/experiences/' },
        { text: '工程项目', link: '/competitions/projects/' },
        { text: '一生一芯', link: '/competitions/projects/ysyx' }
      ]
    }
  ],
  '/career/': [
    {
      text: '升学与职业',
      items: [{ text: '总览', link: '/career/' }]
    },
    {
      text: '升学',
      items: [
        { text: '升学入口', link: '/career/education/' },
        { text: '国内升学', link: '/career/graduate-study/' },
        { text: '保研 / 推免', link: '/career/graduate-study/baoyan' },
        { text: '考研', link: '/career/graduate-study/kaoyan' },
        { text: '国外升学', link: '/career/study-abroad/' }
      ]
    },
    {
      text: '职业',
      items: [
        { text: '职业入口', link: '/career/work/' },
        { text: '实习', link: '/career/internship/' },
        { text: '就业：岗位与面试', link: '/career/employment/' },
        { text: '上海 IC 企业地图', link: '/career/employment/companies' }
      ]
    }
  ],
  '/tools/': [
    {
      text: '工具与资源',
      items: [
        { text: '总览', link: '/tools/' },
        { text: 'EDA 工具全景', link: '/tools/eda/' },
        { text: '商用工具链对照', link: '/tools/eda/commercial' },
        { text: '开发环境：EDA 环境与 Linux', link: '/tools/development/' },
        { text: '开源项目与工具链', link: '/tools/open-source/' },
        { text: '友链与资源入口', link: '/tools/links' }
      ]
    }
  ],
  '/community/': [
    {
      text: '社区与共建',
      items: [
        { text: '关于本站', link: '/community/' },
        { text: '参与共建', link: '/community/contributing' },
        { text: '文章写作示例', link: '/community/writing' },
        { text: '贡献者与署名', link: '/community/contributors' },
        { text: '站点维护', link: '/community/maintenance' }
      ]
    }
  ]
}

export default withMermaid(
  defineConfig({
    lang: 'zh-CN',
    title: '上科大芯知库',
    titleTemplate: ':title · 上科大芯知库',
    description: '上海科技大学集成电路学生 Wiki：课程、课题组、科研方向、自学资源与升学就业经验',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      ['meta', { name: 'theme-color', content: '#07546d' }],
      ['meta', { property: 'og:title', content: '上科大芯知库 · ShanghaiTech IC Wiki' }],
      ['meta', { property: 'og:description', content: '由上科大学生维护的集成电路学习、科研与升学指南' }]
    ],
    markdown: {
      math: true,
      lineNumbers: false
    },
    themeConfig: {
      logo: '/favicon.svg',
      siteTitle: '上科大芯知库',
      nav: [
        { text: '认识 IC', link: '/explore-ic/', activeMatch: '^/explore-ic/' },
        { text: '学习地图', link: '/learning/', activeMatch: '^/learning/' },
        { text: '上科大 IC', link: '/shanghaitech/', activeMatch: '^/shanghaitech/' },
        { text: '科研探索', link: '/research/', activeMatch: '^/research/' },
        { text: '竞赛与项目', link: '/competitions/', activeMatch: '^/competitions/' },
        { text: '升学与职业', link: '/career/', activeMatch: '^/career/' },
        { text: '工具与资源', link: '/tools/', activeMatch: '^/tools/' },
        { text: '社区', link: '/community/', activeMatch: '^/community/' }
      ],
      sidebar,
      outline: { level: [2, 3], label: '本页目录' },
      socialLinks: [{ icon: 'github', link: repo }],
      editLink: {
        pattern: `${repo}/edit/main/docs/:path`,
        text: '在 GitHub 上编辑此页'
      },
      lastUpdated: { text: '最后更新' },
      docFooter: { prev: '上一页', next: '下一页' },
      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '目录',
      returnToTopLabel: '回到顶部',
      langMenuLabel: '语言',
      externalLinkIcon: true,
      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
            modal: {
              noResultsText: '没有找到结果',
              resetButtonTitle: '清除',
              footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
            }
          }
        }
      },
      footer: {
        message: '上海科技大学学生发起的非官方 Wiki · 代码 MIT，原创内容 CC BY 4.0 · 院系信息以学校官网为准',
        copyright: 'ShanghaiTech IC Wiki contributors'
      }
    },
    mermaid: {
      theme: 'base',
      flowchart: { useMaxWidth: false },
      mindmap: { useMaxWidth: false },
      themeVariables: {
        fontFamily: 'Inter, "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif',
        primaryColor: '#e6f4f6',
        primaryBorderColor: '#007f95',
        primaryTextColor: '#102830',
        lineColor: '#4d7d88'
      }
    }
  })
)
