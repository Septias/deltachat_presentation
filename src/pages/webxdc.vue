<template lang="pug">
slide
  h1 Was ist Webxdc?
  slide2sides
    template(#left)
      webxdc_content
    template(#right)
      .flex.gap-4
        img(width="250" src="/webxdc_chat.png")
        img(width="250" src="/webxdc_app.png")
</template>

<route lang="yaml">
meta:
  heading: Was ist Webxdc?
  next: bots
</route>
