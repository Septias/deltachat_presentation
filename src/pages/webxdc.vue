<template lang="pug">
slide
  h1 Der Webxdc Standart
  slide2sides
    template(#left)
      webxdc_content
    template(#right)
      .flex.gap-4
        img(width="250" src="/webxdc_chat.webp")
        img(width="250" src="/webxdc_app.webp")
</template>

<route lang="yaml">
meta:
  heading: Geteilte Apps (Webxdc)
  next: bots
</route>
