// 科研方向分类：首页拓扑图、方向页、教授列表共用这一份定义。
// 新增方向时同时在 docs/explore-ic/research-directions/ 下建同名页面（link 字段）。

export type ClusterId = 'device' | 'circuit' | 'system' | 'eda'

export interface Cluster {
  id: ClusterId
  name: string
  en: string
}

export interface Direction {
  id: string
  name: string
  short: string
  cluster: ClusterId
  link: string
  summary: string
}

export const clusters: Cluster[] = [
  { id: 'device', name: '器件与工艺', en: 'Devices & Process' },
  { id: 'circuit', name: '电路设计', en: 'Circuits' },
  { id: 'system', name: '系统与架构', en: 'Systems & Architecture' },
  { id: 'eda', name: '设计方法学', en: 'Design Methodology' }
]

export const directions: Direction[] = [
  {
    id: 'devices',
    name: '半导体器件与新型存储',
    short: '器件/存储',
    cluster: 'device',
    link: '/explore-ic/research-directions/devices',
    summary: '自旋电子、磁存储、GaN 宽禁带、低温电子学与量子器件'
  },
  {
    id: 'photonics',
    name: '光电子与集成光子',
    short: '光电/硅光',
    cluster: 'device',
    link: '/explore-ic/research-directions/photonics',
    summary: '光电探测、半导体激光器、硅光互连、非线性与量子光芯片、光计算'
  },
  {
    id: 'mems',
    name: 'MEMS、传感与柔性电子',
    short: 'MEMS/传感',
    cluster: 'device',
    link: '/explore-ic/research-directions/mems-sensors',
    summary: '压电 MEMS、射频滤波器、穿戴/植入式传感、柔性电子'
  },
  {
    id: 'analog',
    name: '模拟/混合信号与生物医疗芯片',
    short: '模拟/混合',
    cluster: 'circuit',
    link: '/explore-ic/research-directions/analog-mixed',
    summary: '数模混合电路、脑机接口芯片、植入式医疗电子'
  },
  {
    id: 'power',
    name: '电源管理与功率电子',
    short: '电源/功率',
    cluster: 'circuit',
    link: '/explore-ic/research-directions/power',
    summary: '电源管理芯片、算力电源、无线传能、能量收集'
  },
  {
    id: 'rf',
    name: '射频、微波与电磁',
    short: '射频/电磁',
    cluster: 'circuit',
    link: '/explore-ic/research-directions/rf-em',
    summary: '天线与微波电路、毫米波/太赫兹、超构表面、电磁成像'
  },
  {
    id: 'digital',
    name: '数字 VLSI 与专用芯片',
    short: '数字 VLSI',
    cluster: 'circuit',
    link: '/explore-ic/research-directions/digital-vlsi',
    summary: '图像/图形/视觉专用芯片、FPGA、低功耗数字电路、流片'
  },
  {
    id: 'ai-hw',
    name: 'AI 芯片与新型计算',
    short: 'AI 芯片',
    cluster: 'system',
    link: '/explore-ic/research-directions/ai-hardware',
    summary: '神经网络加速器、随机/低比特计算、存算一体、类脑与光计算'
  },
  {
    id: 'arch',
    name: '计算机体系结构与系统',
    short: '体系结构',
    cluster: 'system',
    link: '/explore-ic/research-directions/architecture',
    summary: 'RISC-V 处理器、GPGPU、存储系统、微架构安全'
  },
  {
    id: 'security',
    name: '硬件安全与隐私计算',
    short: '硬件安全',
    cluster: 'system',
    link: '/explore-ic/research-directions/hardware-security',
    summary: '侧信道、可信执行环境、隐私计算芯片、硬件木马'
  },
  {
    id: 'eda',
    name: 'EDA 与可制造性设计',
    short: 'EDA',
    cluster: 'eda',
    link: '/explore-ic/research-directions/eda',
    summary: 'AI4EDA、设计空间探索、物理设计、计算光刻与 DFM'
  }
]

export const directionById = Object.fromEntries(directions.map((d) => [d.id, d])) as Record<string, Direction>
