<script setup lang="ts">
import { withBase } from 'vitepress'
import { faculty } from '../../data/faculty'
import { courses } from '../../data/courses'
import { directions } from '../../data/directions'
import TopologyGraph from './TopologyGraph.vue'

const stats = [
  { n: faculty.length, unit: '位', label: 'IC 相关教授 / 课题组' },
  { n: courses.length, unit: '门', label: 'IC 相关本研课程' },
  { n: directions.length, unit: '个', label: '细分科研方向' },
  { n: 'RTL→GDS', unit: '', label: 'Cadence 后端全流程实训' }
]

const entries = [
  { no: '01', title: '学习地图', desc: '上科大课程承接网络与四条进阶路线：数字、模拟、器件、EDA。', link: '/map/' },
  { no: '02', title: '上科大课程', desc: '2026-27 官方开课表 + 学长学姐的课程经验与踩坑记录。', link: '/courses/' },
  { no: '03', title: '教授与课题组', desc: '后摩尔中心、智慧电气、系统与安全中心的 IC 相关课题组。', link: '/shanghaitech/faculty' },
  { no: '04', title: '科研方向', desc: '11 个细分方向：做什么、谁在做、要先学什么。', link: '/research/' },
  { no: '05', title: '科普基础篇', desc: '产业链、设计流程、器件工艺、前沿技术与术语表。', link: '/basics/' },
  { no: '06', title: '自学资源 · EDA', desc: '全球公开课、经典教材、商用与开源 EDA 工具链。', link: '/self-learning/' },
  { no: '07', title: '科研探索', desc: '进组、读论文、会议地图、科研工具与学术写作。', link: '/research-guide/' },
  { no: '08', title: '升学 · 就业 · 竞赛', desc: '保研、出国、考研、实习求职，以及集创赛与一生一芯。', link: '/career/' }
]

const features = [
  {
    tag: '研究中心',
    title: '后摩尔器件与集成系统中心',
    desc: '信息学院 IC 方向的大本营：电路、器件、系统三条线，覆盖数字/模拟/射频芯片、自旋与光电器件、EDA 与神经形态计算。',
    link: '/shanghaitech/'
  },
  {
    tag: '课程体系',
    title: '本研一体，研究生课向本科开放',
    desc: '数字集成电路 II、集成电路设计自动化、可重构计算、可测性设计、自旋电子学……本科阶段就能修到研究生级别的芯片课程。',
    link: '/courses/'
  },
  {
    tag: '工程实训',
    title: 'Cadence 集成电路暑期实训',
    desc: '学院与楷登电子合作，Genus / Innovus / Tempus / Pegasus / Voltus 全家桶，用 RISC-V 项目走通 RTL-to-GDS。',
    link: '/courses/cadence-summer'
  },
  {
    tag: '产教融合',
    title: '上海创芯学院 · 一生一芯',
    desc: '上科大、上交、复旦共同参与创建；“一生一芯”是学位授予门槛，从架构设计一路做到流片与硅后验证。',
    link: '/shanghaitech/programs'
  },
  {
    tag: '科研平台',
    title: '微纳加工、芯片测试与流片',
    desc: '校级量子器件中心 / 材料器件中心洁净室、EDA 计算集群，以及课题组与创芯学院提供的流片机会。',
    link: '/shanghaitech/platforms'
  },
  {
    tag: '前沿交叉',
    title: '3D 渲染芯片、光计算、存算与 AI4EDA',
    desc: '三维重建与渲染芯片、随机计算、自旋类脑、光子智能芯片、AI 赋能计算光刻……小而尖的交叉方向。',
    link: '/research/'
  }
]

const tracks = [
  { title: '数字 IC 与体系结构', link: '/map/digital', chain: ['SI100B', 'EE115B', 'CS110', 'EE113', 'EE291F', 'EE213', 'EE219'], c: 'circuit' },
  { title: '模拟 / 射频 / 电源', link: '/map/analog', chain: ['EE111', 'EE115A', 'EE112', 'EE212', 'EE130', 'EE230', 'EE171'], c: 'system' },
  { title: '器件、工艺与光电', link: '/map/device', chain: ['EE120', 'EE220', 'EE224A', 'EE2211', 'EE237', 'EE222'], c: 'device' },
  { title: 'EDA 与设计方法学', link: '/map/eda', chain: ['CS100', 'SI231B', 'SI251', 'EE215A', 'SI365'], c: 'eda' }
]

const friends = [
  { name: 'NJU 集成全家桶', url: 'https://njuic-students.github.io/' },
  { name: 'IC 自学指南', url: 'https://crys-chen.github.io/ic-guide/' },
  { name: 'VSPLab', url: 'https://vsplab.cn/' },
  { name: '一生一芯', url: 'https://ysyx.oscc.cc/' },
  { name: '上科大信息学院', url: 'https://sist.shanghaitech.edu.cn/' }
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true" />
      <div class="hero-inner">
        <div class="hero-text">
          <h1>
            <span class="hero-name-en" lang="en">ShanghaiTech <span class="name-suffix">IC Wiki</span></span>
            <span lang="zh-CN">上科大<span class="grad">芯知库</span></span>
          </h1>
          <p class="lead">
            从电路基础到流片签核——上海科技大学学生发起的集成电路学习、科研与升学指南。
            <br />
            把散落在课程群、组会和学长学姐口中的经验，连成一张看得见的地图。
          </p>
          <div class="actions">
            <a class="btn btn--primary" :href="withBase('/map/')">开始探索 →</a>
            <a class="btn btn--ghost" :href="withBase('/shanghaitech/faculty')">教授与课题组</a>
            <a class="btn btn--ghost" :href="withBase('/research/')">科研方向拓扑</a>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <svg viewBox="0 0 360 360">
            <defs>
              <linearGradient id="die" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#0f5b6d" />
                <stop offset="1" stop-color="#0a3b48" />
              </linearGradient>
              <linearGradient id="trace" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#24e1e5" />
                <stop offset="1" stop-color="#ec725e" />
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>
            <!-- pins -->
            <g class="pins">
              <rect v-for="i in 9" :key="'t' + i" :x="62 + i * 22" y="30" width="8" height="26" rx="2" />
              <rect v-for="i in 9" :key="'b' + i" :x="62 + i * 22" y="304" width="8" height="26" rx="2" />
              <rect v-for="i in 9" :key="'l' + i" x="30" :y="62 + i * 22" width="26" height="8" rx="2" />
              <rect v-for="i in 9" :key="'r' + i" x="304" :y="62 + i * 22" width="26" height="8" rx="2" />
            </g>
            <rect x="56" y="56" width="248" height="248" rx="18" fill="url(#die)" stroke="rgba(36,225,229,.45)" />
            <rect x="70" y="70" width="220" height="220" rx="10" fill="none" stroke="rgba(255,255,255,.08)" />
            <!-- blocks -->
            <g class="blocks">
              <rect x="84" y="84" width="92" height="70" rx="6" />
              <text x="130" y="124">RISC-V</text>
              <rect x="186" y="84" width="90" height="70" rx="6" />
              <text x="231" y="124">NPU</text>
              <rect x="84" y="164" width="60" height="112" rx="6" />
              <text x="114" y="224">SRAM</text>
              <rect x="154" y="164" width="122" height="52" rx="6" />
              <text x="215" y="194">3D Render</text>
              <rect x="154" y="226" width="58" height="50" rx="6" />
              <text x="183" y="255">PLL</text>
              <rect x="218" y="226" width="58" height="50" rx="6" />
              <text x="247" y="255">SerDes</text>
            </g>
            <!-- traces -->
            <g class="traces" fill="none" stroke="url(#trace)" stroke-width="2" stroke-linecap="round">
              <path d="M176 119 H186" />
              <path d="M130 154 V164" />
              <path d="M231 154 V164" />
              <path d="M144 220 H154" />
              <path class="flow" d="M18 180 H56 M304 120 H342 M180 304 V342 M120 18 V56" />
            </g>
            <g filter="url(#glow)" opacity=".7" fill="none" stroke="#24e1e5" stroke-width="2">
              <path class="flow" d="M176 119 H186 M130 154 V164 M231 154 V164 M144 220 H154" />
            </g>
            <text x="180" y="292" class="die-label">SHANGHAITECH · IC</text>
          </svg>
        </div>
      </div>
      <div class="stats">
        <div v-for="s in stats" :key="s.label" class="stat">
          <strong>{{ s.n }}<small>{{ s.unit }}</small></strong>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- Entries -->
    <section class="block">
      <header class="block-head">
        <p class="kicker">Start Here</p>
        <h2>从这里开始</h2>
      </header>
      <div class="entries">
        <a v-for="e in entries" :key="e.no" class="entry" :href="withBase(e.link)">
          <span class="no">{{ e.no }}</span>
          <h3>{{ e.title }}</h3>
          <p>{{ e.desc }}</p>
          <span class="go">进入 →</span>
        </a>
      </div>
    </section>

    <!-- Features -->
    <section class="block block--tint">
      <header class="block-head">
        <p class="kicker">Why ShanghaiTech</p>
        <h2>上科大特色</h2>
      </header>
      <div class="features">
        <a v-for="f in features" :key="f.title" class="feature" :href="withBase(f.link)">
          <span class="tag">{{ f.tag }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </a>
      </div>
    </section>

    <!-- Topology -->
    <section class="block">
      <header class="block-head">
        <p class="kicker">Research Topology</p>
        <h2>科研方向 × 课题组拓扑</h2>
        <p class="sub">内环是 11 个科研方向，外环是上科大 IC 相关课题组。悬停查看介绍，点击方向进入详情，点击教授打开主页。</p>
      </header>
      <TopologyGraph />
    </section>

    <!-- Tracks -->
    <section class="block block--tint">
      <header class="block-head">
        <p class="kicker">Learning Tracks</p>
        <h2>四条学习路线</h2>
        <p class="sub">按上科大课程代码排列的推荐修读顺序，点击查看每门课为什么要学、校外还能补什么。</p>
      </header>
      <div class="tracks">
        <a v-for="t in tracks" :key="t.title" :class="['track', 'c-' + t.c]" :href="withBase(t.link)">
          <h3>{{ t.title }}</h3>
          <div class="chain">
            <template v-for="(c, i) in t.chain" :key="c">
              <span class="code">{{ c }}</span>
              <span v-if="i < t.chain.length - 1" class="arrow">›</span>
            </template>
          </div>
        </a>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner">
        <div>
          <h2>这是一所用爱发电的“赛博学院”</h2>
          <p>修过的课、进过的组、踩过的坑、拿到的 offer——每一份经验都能让下一届少走弯路。</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn--accent" :href="withBase('/about/contribute')">参与共建</a>
          <a class="btn btn--ghost" href="https://github.com/ShanghaiTech-IC-Wiki-Dev/shanghaitech-ic-wiki-dev.github.io" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
      <div class="friends">
        <span>友站</span>
        <a v-for="f in friends" :key="f.name" :href="f.url" target="_blank" rel="noopener">{{ f.name }}</a>
        <a :href="withBase('/links/')">更多 →</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  --max: 1180px;
}

/* ---------- hero ---------- */
.hero {
  position: relative;
  color: #e9f6f8;
  background: var(--stic-hero-gradient);
  padding: 72px 24px 0;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(600px 320px at 82% 30%, rgba(36, 225, 229, 0.18), transparent 70%),
    radial-gradient(520px 300px at 12% 90%, rgba(223, 87, 109, 0.16), transparent 70%),
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: auto, auto, 36px 36px, 36px 36px;
  mask-image: linear-gradient(180deg, #000 70%, transparent);
}
.hero-inner {
  position: relative;
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 0.9fr;
  gap: 40px;
  align-items: center;
}
.hero h1 {
  display: grid;
  gap: 0.16em;
  margin: 0;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
}
.hero-name-en {
  font-size: 0.9em;
  font-weight: 750;
  color: #c2f4f7;
}
.hero-name-en .name-suffix {
  white-space: nowrap;
}
.hero h1 .grad {
  background: linear-gradient(120deg, #5ff0f2 0%, #9ad7ff 45%, #ff9a8b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.lead {
  margin: 22px 0 30px;
  font-size: 17px;
  line-height: 1.85;
  color: rgba(233, 246, 248, 0.86);
  max-width: 580px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn--primary {
  background: linear-gradient(135deg, #ec725e, #b33255);
  color: #fff;
  box-shadow: 0 10px 26px -10px rgba(236, 114, 94, 0.7);
}
.btn--ghost {
  color: #e9f6f8;
  border: 1px solid rgba(233, 246, 248, 0.32);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
}
.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}
.btn--accent {
  background: linear-gradient(135deg, #ec725e, #b33255);
  color: #fff;
}
.hero-art svg {
  width: 100%;
  max-width: 380px;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.35));
}
.pins rect {
  fill: #8fb8c2;
  opacity: 0.55;
}
.blocks rect {
  fill: rgba(255, 255, 255, 0.06);
  stroke: rgba(143, 227, 236, 0.45);
}
.blocks text {
  fill: #bdecf2;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
  font-family: var(--vp-font-family-mono);
}
.die-label {
  fill: rgba(189, 236, 242, 0.55);
  font-size: 9px;
  letter-spacing: 0.25em;
  text-anchor: middle;
  font-family: var(--vp-font-family-mono);
}
.flow {
  stroke-dasharray: 6 8;
  animation: flow 2.4s linear infinite;
}
@keyframes flow {
  to {
    stroke-dashoffset: -28;
  }
}
@media (prefers-reduced-motion: reduce) {
  .flow {
    animation: none;
  }
}
.stats {
  position: relative;
  max-width: var(--max);
  margin: 56px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.stat {
  padding: 22px 8px 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat + .stat {
  padding-left: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}
.stat strong {
  font-size: 30px;
  font-weight: 800;
  color: #fff;
  font-family: var(--vp-font-family-base);
  letter-spacing: -0.01em;
}
.stat small {
  font-size: 14px;
  margin-left: 3px;
  font-weight: 600;
  color: #8fe3ec;
}
.stat span {
  font-size: 13px;
  color: rgba(233, 246, 248, 0.7);
}

/* ---------- blocks ---------- */
.block {
  padding: 72px 24px;
}
.block--tint {
  background:
    linear-gradient(var(--stic-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--stic-grid-line) 1px, transparent 1px),
    var(--stic-bg-tint);
  background-size: 32px 32px, 32px 32px, auto;
}
.block > * {
  max-width: var(--max);
  margin-left: auto;
  margin-right: auto;
}
.block-head {
  margin-bottom: 30px;
}
.kicker {
  margin: 0 0 6px;
  font-size: 12.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--stic-accent);
}
.block-head h2 {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}
.block-head .sub {
  margin: 10px 0 0;
  max-width: 720px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.entries {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.entry,
.feature,
.track {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 22px 20px 20px;
  border-radius: 14px;
  border: 1px solid var(--stic-card-border);
  background: var(--stic-card-bg);
  box-shadow: var(--stic-card-shadow);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.25s, border-color 0.25s;
}
.entry:hover,
.feature:hover,
.track:hover {
  transform: translateY(-3px);
  border-color: var(--stic-card-border-hover);
  box-shadow: var(--stic-card-shadow-hover);
}
.entry .no {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  opacity: 0.8;
}
.entry h3,
.feature h3,
.track h3 {
  margin: 10px 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.entry p,
.feature p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  flex: 1;
}
.entry .go {
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.feature {
  overflow: hidden;
}
.feature::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 3px;
  background: var(--stic-accent-gradient);
  opacity: 0;
  transition: opacity 0.25s;
}
.feature:hover::before {
  opacity: 1;
}
.feature .tag {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  color: var(--stic-accent);
  background: var(--stic-accent-soft);
}

.tracks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.track {
  border-left: 4px solid var(--node);
}
.track.c-device { --node: var(--stic-cluster-device); --node-soft: var(--stic-cluster-device-soft); }
.track.c-circuit { --node: var(--stic-cluster-circuit); --node-soft: var(--stic-cluster-circuit-soft); }
.track.c-system { --node: var(--stic-cluster-system); --node-soft: var(--stic-cluster-system-soft); }
.track.c-eda { --node: var(--stic-cluster-eda); --node-soft: var(--stic-cluster-eda-soft); }
.chain {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}
.chain .code {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 7px;
  color: var(--node);
  background: var(--node-soft);
}
.chain .arrow {
  color: var(--vp-c-text-3);
}

/* ---------- CTA ---------- */
.cta {
  padding: 0 24px 72px;
}
.cta-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 36px 40px;
  border-radius: 20px;
  background: var(--stic-hero-gradient);
  color: #e9f6f8;
  box-shadow: 0 30px 60px -30px rgba(7, 84, 109, 0.6);
}
.cta h2 {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
}
.cta p {
  margin: 0;
  color: rgba(233, 246, 248, 0.82);
  font-size: 15px;
}
.cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}
.friends {
  max-width: var(--max);
  margin: 22px auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  font-size: 13.5px;
  color: var(--vp-c-text-3);
}
.friends span {
  font-weight: 700;
  color: var(--vp-c-text-2);
}
.friends a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.friends a:hover {
  color: var(--vp-c-brand-1);
}

/* ---------- responsive ---------- */
@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .hero-art {
    display: none;
  }
  .entries {
    grid-template-columns: repeat(2, 1fr);
  }
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat:nth-child(3) {
    border-left: none;
    padding-left: 8px;
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 640px) {
  .hero h1 {
    font-size: clamp(32px, 9.6vw, 40px);
  }
  .hero {
    padding-top: 48px;
  }
  .entries,
  .features,
  .tracks {
    grid-template-columns: 1fr;
  }
  .block {
    padding: 52px 20px;
  }
}
</style>
