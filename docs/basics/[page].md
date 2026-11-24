---
title: 页面已迁移
search: false
head:
  - - meta
    - name: robots
      content: noindex
---

<script setup>
import { onMounted } from 'vue'
import { useData, withBase } from 'vitepress'

const { params } = useData()
const target = withBase(params.value.target)
onMounted(() => window.location.replace(target + window.location.search + window.location.hash))
</script>

本页已迁移，请前往<a :href="target">{{ params.title }}</a>。
