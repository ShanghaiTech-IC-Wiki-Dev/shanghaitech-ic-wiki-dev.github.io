import { defineConfig, type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repo = 'https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io'

const campusSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '上科大 IC 生态',
    items: [
      {
        text: '课程体系',
        link: '/courses/',
        collapsed: true,
        items: [
          {
            text: '专业基础',
            items: [
              { text: 'SI100B 信息科学技术导论', link: '/courses/si100b' },
              { text: 'EE115A 模拟电路', link: '/courses/ee115a' },
              { text: 'EE115B 数字电路', link: '/courses/ee115b' },
              { text: 'EE150 / EE150L 信号与系统', link: '/courses/ee150' },
              { text: 'CS110 计算机体系结构 I', link: '/courses/cs110' }
            ]
          },
          {
            text: '芯片设计进阶',
            items: [
              { text: 'EE113 / EE113L 数字集成电路 I', link: '/courses/ee113' },
              { text: 'EE291F 数字 VLSI 设计流程', link: '/courses/ee291f' },
              { text: 'EE219 智能计算系统', link: '/courses/ee219' },
              { text: 'CS290U 深度学习工程实践', link: '/courses/cs290u' },
              { text: 'Cadence 集成电路暑期实训', link: '/courses/cadence-summer' }
            ]
          }
        ]
      },
      { text: '总览', link: '/shanghaitech/' },
      { text: '教授与课题组', link: '/shanghaitech/faculty' },
      { text: '科研与工艺平台', link: '/shanghaitech/platforms' },
      { text: '特色培养项目', link: '/shanghaitech/programs' }
    ]
  }
]

const researchOverview = { text: '方向巡礼与拓扑', link: '/research/' }
const researchTopics: DefaultTheme.SidebarItem[] = [
  {
    text: '器件与工艺',
    items: [
      { text: '半导体器件与新型存储', link: '/research/devices' },
      { text: '光电子与集成光子', link: '/research/photonics' },
      { text: 'MEMS、传感与柔性电子', link: '/research/mems-sensors' }
    ]
  },
  {
    text: '电路设计',
    items: [
      { text: '数字 VLSI 与专用芯片', link: '/research/digital-vlsi' },
      { text: '模拟/混合信号与医疗芯片', link: '/research/analog-mixed' },
      { text: '电源管理与功率电子', link: '/research/power' },
      { text: '射频、微波与电磁', link: '/research/rf-em' }
    ]
  },
  {
    text: '系统与架构',
    items: [
      { text: 'AI 芯片与新型计算', link: '/research/ai-hardware' },
      { text: '计算机体系结构与系统', link: '/research/architecture' },
      { text: '硬件安全与隐私计算', link: '/research/hardware-security' }
    ]
  },
  {
    text: '设计方法学',
    items: [{ text: 'EDA 与可制造性设计', link: '/research/eda' }]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/about/': [
    {
      text: '社区与共建',
      items: [
        { text: '关于本站', link: '/about/' },
        { text: '参与共建', link: '/about/contribute' },
        { text: '文章写作示例', link: '/about/writing' },
        { text: '贡献者与署名', link: '/about/contributors' },
        { text: '站点维护', link: '/about/maintenance' }
      ]
    }
  ],
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
      items: [researchOverview, ...researchTopics.map(topic => ({ ...topic, collapsed: true }))]
    }
  ],
  '/map/': [
    {
      text: '学习地图',
      items: [
        { text: '总览：上科大课程网络', link: '/map/' },
        { text: '数字 IC 与体系结构', link: '/map/digital' },
        { text: '模拟 / 射频 / 电源', link: '/map/analog' },
        { text: '器件、工艺与光电', link: '/map/device' },
        { text: 'EDA 与设计方法学', link: '/map/eda' }
      ]
    }
  ],
  '/courses/': campusSidebar,
  '/shanghaitech/': campusSidebar,
  '/research/': [
    { text: '科研方向', items: [researchOverview] },
    ...researchTopics
  ],
  '/self-learning/': [
    {
      text: '自学资源',
      items: [
        { text: '如何使用本栏目', link: '/self-learning/' },
        { text: '数学、编程与工具基础', link: '/self-learning/foundations' },
        { text: '数字电路与 HDL', link: '/self-learning/digital' },
        { text: '计算机体系结构', link: '/self-learning/architecture' },
        { text: '模拟与射频电路', link: '/self-learning/analog' },
        { text: '半导体器件与工艺', link: '/self-learning/device' },
        { text: 'EDA 与算法', link: '/self-learning/eda-algo' },
        { text: 'AI 硬件与系统', link: '/self-learning/ai-hardware' }
      ]
    }
  ],
  '/eda/': [
    {
      text: 'EDA 工具',
      items: [
        { text: '工具全景', link: '/eda/' },
        { text: '商用工具链对照', link: '/eda/commercial' },
        { text: '开源工具链', link: '/eda/open-source' },
        { text: '上科大 EDA 环境与 Linux', link: '/eda/environment' }
      ]
    }
  ],
  '/research-guide/': [
    {
      text: '科研探索',
      items: [
        { text: '本科生科研入门', link: '/research-guide/' },
        { text: '论文阅读方法', link: '/research-guide/paper-reading' },
        { text: '会议与期刊地图', link: '/research-guide/venues' },
        { text: '科研工具', link: '/research-guide/tools' },
        { text: '学术写作与汇报', link: '/research-guide/writing' }
      ]
    }
  ],
  '/career/': [
    {
      text: '升学与就业',
      items: [
        { text: '去向总览', link: '/career/' },
        { text: '保研 / 推免', link: '/career/baoyan' },
        { text: '出国申请', link: '/career/abroad' },
        { text: '考研', link: '/career/kaoyan' },
        { text: '实习指南', link: '/career/internship' },
        { text: '就业：岗位与面试', link: '/career/jobs' },
        { text: '上海 IC 企业地图', link: '/career/companies' }
      ]
    }
  ],
  '/competitions/': [
    {
      text: '竞赛与项目',
      items: [
        { text: '竞赛总览', link: '/competitions/' },
        { text: '一生一芯', link: '/competitions/ysyx' }
      ]
    }
  ],
  '/links/': [
    {
      text: '友链',
      items: [{ text: '开源社区与友站', link: '/links/' }]
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
        { text: '学习地图', link: '/map/', activeMatch: '^/map/' },
        {
          text: '上科大 IC',
          activeMatch: '^/(courses|shanghaitech|research)/',
          items: [
            { text: '课程体系', link: '/courses/' },
            { text: '教授与课题组', link: '/shanghaitech/faculty' },
            { text: '科研方向拓扑', link: '/research/' },
            { text: '科研与工艺平台', link: '/shanghaitech/platforms' },
            { text: '特色培养项目', link: '/shanghaitech/programs' }
          ]
        },
        {
          text: '学习资源',
          activeMatch: '^/(self-learning|eda)/',
          items: [
            { text: '自学资源', link: '/self-learning/' },
            { text: 'EDA 工具', link: '/eda/' }
          ]
        },
        {
          text: '成长路径',
          activeMatch: '^/(research-guide|career|competitions)/',
          items: [
            { text: '科研探索', link: '/research-guide/' },
            { text: '竞赛与项目', link: '/competitions/' },
            { text: '升学与就业', link: '/career/' }
          ]
        },
        {
          text: '社区',
          activeMatch: '^/(about|links)/',
          items: [
            { text: '关于本站', link: '/about/' },
            { text: '参与共建', link: '/about/contribute' },
            { text: '站点维护', link: '/about/maintenance' },
            { text: '友链', link: '/links/' }
          ]
        }
      ],
      sidebar,
      outline: { level: [2, 3], label: '本页目录' },
      socialLinks: [{ icon: 'github', link: repo }],
      editLink: {
        pattern: `${repo}/edit/develop/docs/:path`,
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
