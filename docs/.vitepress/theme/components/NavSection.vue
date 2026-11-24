<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, useId, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { VPLink } from 'vitepress/theme'

const props = defineProps<{
  text: string
  link: string
  items: { text: string; link: string }[]
  activeRoots: string[]
  screenMenu?: boolean
}>()

const { page } = useData()
const route = useRoute()
const active = computed(() => props.activeRoots.includes(page.value.relativePath.split('/')[0]))
const closeScreen = inject<() => void>('close-screen')
const expanded = ref(false)
const root = ref<HTMLElement>()
const toggle = ref<HTMLButtonElement>()
const menuId = useId()
let hoverTimer: ReturnType<typeof setTimeout> | undefined

function setExpanded(open: boolean) {
  clearTimeout(hoverTimer)
  expanded.value = open
}

function onPointerEnter(event: PointerEvent) {
  if (props.screenMenu || event.pointerType !== 'mouse') return
  // 给直接点箭头的操作留出时间，避免一次点击先展开再收起。
  hoverTimer = setTimeout(() => { expanded.value = true }, 100)
}

function onPointerLeave(event: PointerEvent) {
  if (!props.screenMenu && event.pointerType === 'mouse') setExpanded(false)
}

function closeFromOutside(event: Event) {
  if (!root.value?.contains(event.target as Node)) setExpanded(false)
}

function closeOnEscape(event: KeyboardEvent) {
  if (!expanded.value) return
  event.stopPropagation()
  setExpanded(false)
  toggle.value?.focus()
}

function followLink() {
  setExpanded(false)
  if (props.screenMenu) closeScreen?.()
}

watch(() => route.path, () => setExpanded(false))
onMounted(() => {
  document.addEventListener('pointerdown', closeFromOutside)
  document.addEventListener('focusin', closeFromOutside)
})
onUnmounted(() => {
  clearTimeout(hoverTimer)
  document.removeEventListener('pointerdown', closeFromOutside)
  document.removeEventListener('focusin', closeFromOutside)
})
</script>

<template>
  <div ref="root" class="section-nav" :class="{ mobile: screenMenu }"
    @pointerenter="onPointerEnter" @pointerleave="onPointerLeave" @keydown.esc="closeOnEscape">
    <div class="section-row">
      <VPLink class="section-title" :class="{ active }" :href="link"
        :aria-current="route.path === withBase(link) ? 'page' : undefined" @click="followLink">
        {{ text }}
      </VPLink>
      <button ref="toggle" type="button" class="section-toggle" :aria-controls="menuId"
        :aria-expanded="expanded" :aria-label="text + '子菜单'" @click="setExpanded(!expanded)">
        <span class="vpi-chevron-down" aria-hidden="true" />
      </button>
    </div>
    <ul v-show="expanded" :id="menuId" class="section-menu">
      <li v-for="item in items" :key="item.link">
        <VPLink :href="item.link" :aria-current="route.path === withBase(item.link) ? 'page' : undefined"
          @click="followLink">{{ item.text }}</VPLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.section-nav { position: relative; font-size: 14px; font-weight: 500; }
.section-row { display: flex; align-items: center; height: var(--vp-nav-height); }
.section-title { display: flex; align-items: center; align-self: stretch; padding-left: 12px; }
.section-toggle { display: grid; place-items: center; min-width: 28px; height: 40px; }
.section-toggle[aria-expanded="true"] span { transform: rotate(180deg); }
.section-title.active, .section-menu [aria-current="page"] { color: var(--vp-c-brand-1); }

.section-menu {
  position: absolute;
  top: calc(50% + 20px);
  right: 0;
  min-width: max-content;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}
.section-menu a { display: block; padding: 5px 12px; border-radius: 6px; }
.mobile { border-bottom: 1px solid var(--vp-c-divider); }
.mobile .section-row { height: 48px; }
.mobile .section-title { flex: 1; padding-left: 0; }
.mobile .section-toggle { width: 44px; height: 44px; }
.mobile .section-menu { position: static; padding: 0 0 10px; border: 0; background: none; box-shadow: none; }
</style>
