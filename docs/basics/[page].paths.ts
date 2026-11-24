const pages = [
  ['index', '', '认识 IC'],
  ['design-flow', 'knowledge-map', '芯片设计全流程'],
  ['industry-chain', 'industry-chain', '产业链与公司版图'],
  ['devices-process', 'devices-process', '器件与工艺入门'],
  ['frontier', 'frontier', '前沿技术速览'],
  ['glossary', 'glossary', '常用术语表']
]

export default {
  paths() {
    return pages.map(([page, slug, title]) => ({
      params: { page, target: `/explore-ic/${slug}`, title }
    }))
  }
}
