<template lang="pug">
slide
  h1 Was ist Delta Chat?
  slide2sides
    template(#left)
      dc
    template(#right)
      .flex.gap-4
        img(width="250" src="/store.webp")
        img(width="250" src="/store2.webp")
</template>

<route lang="yaml">
meta:
  heading: Was ist Delta Chat überhaupt?
  next: dc-features
</route>
