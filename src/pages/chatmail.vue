<script setup lang="ts">
import Slide2sides from '~/components/slide2sides.vue';

</script>

<template lang="pug">
slide
  h1 Chatmail Relays
  Slide2sides
    template(#left)
      chatmail-md
    template(#right)
      .grid.place-content-center.gap-5
        img.ml-15(width="250" src="/chatmail.svg")
        img(src="/dovecot.jpg")
        img.p-5.ml-40(src="/postfix.gif")
</template>

<route lang="yaml">
meta:
  heading: Chatmail Relays
  next: webxdc
</route>
