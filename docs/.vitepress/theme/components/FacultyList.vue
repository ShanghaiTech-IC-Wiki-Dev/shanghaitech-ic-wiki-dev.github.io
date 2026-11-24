<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { faculty } from '../../data/faculty'
import { directionById } from '../../data/directions'

const props = defineProps<{
  /** 只显示某个方向（directions.ts 的 id）；为空显示全部 */
  dir?: string
  /** 只显示主方向等于 dir 的教授 */
  primary?: boolean
}>()

const list = computed(() => {
  if (!props.dir) return faculty
  return faculty.filter((f) => (props.primary ? f.dirs[0] === props.dir : f.dirs.includes(props.dir!)))
})
</script>

<template>
  <div class="faculty-grid">
    <article v-for="f in list" :key="f.name" class="faculty-card">
      <header>
        <h4>{{ f.name }}<span class="title">{{ f.title }}</span></h4>
        <p v-if="f.lab" class="lab">{{ f.lab }}</p>
      </header>
      <p class="focus">{{ f.focus }}</p>
      <div class="chips">
        <a
          v-for="d in f.dirs"
          :key="d"
          class="chip"
          :class="'chip--' + directionById[d]?.cluster"
          :href="withBase(directionById[d]?.link ?? '/explore-ic/research-directions/')"
        >{{ directionById[d]?.short ?? d }}</a>
      </div>
      <footer>
        <a :href="f.home" target="_blank" rel="noopener">学院主页</a>
        <a v-if="f.site" :href="f.site" target="_blank" rel="noopener">课题组网站</a>
      </footer>
      <p v-if="f.note" class="note">{{ f.note }}</p>
    </article>
  </div>
</template>

<style scoped>
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.faculty-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 16px 14px;
  border: 1px solid var(--stic-card-border);
  border-radius: 12px;
  background: var(--stic-card-bg);
  box-shadow: var(--stic-card-shadow);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.faculty-card:hover {
  border-color: var(--stic-card-border-hover);
  box-shadow: var(--stic-card-shadow-hover);
  transform: translateY(-2px);
}
.faculty-card h4 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.faculty-card .title {
  font-size: 12.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.faculty-card .lab {
  margin: 2px 0 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.faculty-card .focus {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  flex: 1;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  font-size: 11.5px;
  line-height: 1;
  padding: 5px 8px;
  border-radius: 999px;
  text-decoration: none !important;
  border: 1px solid transparent;
  font-weight: 600;
}
.chip--device { color: var(--stic-cluster-device); background: var(--stic-cluster-device-soft); }
.chip--circuit { color: var(--stic-cluster-circuit); background: var(--stic-cluster-circuit-soft); }
.chip--system { color: var(--stic-cluster-system); background: var(--stic-cluster-system-soft); }
.chip--eda { color: var(--stic-cluster-eda); background: var(--stic-cluster-eda-soft); }
.chip:hover { border-color: currentColor; }
footer {
  display: flex;
  gap: 14px;
  font-size: 12.5px;
  padding-top: 8px;
  border-top: 1px dashed var(--vp-c-divider);
}
footer a {
  text-decoration: none !important;
  font-weight: 600;
}
.note {
  margin: 0;
  font-size: 11.5px;
  color: var(--vp-c-warning-1);
}
</style>
