<script lang="ts" setup>
import { inject, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()


function listener(e: any) {
  const next = route.meta.next

  if (e.key === 'ArrowLeft') {
    router.back()
  }
  else if (e.key === 'ArrowRight') {
    router.push({path: next})
  }
}
document.addEventListener('keydown', listener)

onUnmounted(() => {
  document.removeEventListener('keydown', listener)
})
</script>

<template lang="pug">
div.w-screen.h-screen.c-grid
  .min-width.flex.flex-col.justify-between.p-5.pt-25.max-h-screen
    div.flex-grow.overflow-auto.overflow-x-hidden
      slot
    .flex.justify-between.px-5.mt-10
      span Sebastian Klähn
      span.text-blue-700 Deltachat als Lern- und Schulmessenger
      router-link(to="structure")
</template>
