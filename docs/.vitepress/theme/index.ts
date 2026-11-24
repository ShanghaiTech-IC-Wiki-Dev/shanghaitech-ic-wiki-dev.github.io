import DefaultTheme from 'vitepress/theme'
import { inBrowser, type Theme } from 'vitepress'
import HomePage from './components/HomePage.vue'
import NavSection from './components/NavSection.vue'
import TopologyGraph from './components/TopologyGraph.vue'
import FacultyList from './components/FacultyList.vue'
import CourseTable from './components/CourseTable.vue'
import './custom.css'

// mermaid 以原始尺寸输出（useMaxWidth: false）。这里把过宽的图缩到正文宽度，
// 但缩放不低于 MIN_SCALE（约 11.5px 字号），再宽就交给 .mermaid 的横向滚动。
const MIN_SCALE = 0.72
function fitMermaid(svg: SVGSVGElement) {
  const natural = svg.viewBox.baseVal?.width
  const box = svg.parentElement?.clientWidth
  if (!natural || !box) return
  svg.style.maxWidth = 'none'
  svg.style.height = 'auto'
  svg.style.width = `${Math.max(Math.min(natural, box), natural * MIN_SCALE)}px`
}
const fitAll = () => document.querySelectorAll<SVGSVGElement>('.mermaid > svg').forEach(fitMermaid)
if (inBrowser) {
  new MutationObserver(fitAll).observe(document.documentElement, { childList: true, subtree: true })
  window.addEventListener('resize', fitAll)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NavSection', NavSection)
    app.component('HomePage', HomePage)
    app.component('TopologyGraph', TopologyGraph)
    app.component('FacultyList', FacultyList)
    app.component('CourseTable', CourseTable)
  }
} satisfies Theme
