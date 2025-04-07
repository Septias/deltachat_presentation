<script lang="ts" setup>
const router = useRouter()
const slidesMap = router.getRoutes().reduce((map, route) => {
  if (route.name) {
    map[route.name.toString()] = route
  }
  return map
}, {} as Record<string, ReturnType<typeof router.getRoutes>[number]>)

const slides: { heading: string; path: string }[] = []
let current = slidesMap['intro']

while (current) {
  if (current.meta.heading) {
    slides.push({
      heading: current.meta.heading ?? '',
      path: current.path,
    })
  }
  current = current.meta?.next ? slidesMap[current.meta.next] : undefined
  // remove the current route from the map
  delete slidesMap[current?.name]
}

</script>

<template lang="pug">
slide
  h1 Agenda
  ul
    li(v-for="slide in slides" :key="slide.path")
      router-link.text-black(:to="slide.path") {{ slide.heading }}
</template>

<route lang="yaml">
meta:
  next: deltachat
</route>
