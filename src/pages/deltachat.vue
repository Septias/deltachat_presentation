<template lang="pug">
slide
  h1 What ist Deltachat?
  slide2sides
    template(#left)
      dc
    template(#right)
      .flex.gap-4
        img(width="250" src="/store.png")
        img(width="250" src="/store2.png")
</template>

<route lang="yaml">
meta:
  heading: What ist Deltachat?
  next: webxdc
</route>
