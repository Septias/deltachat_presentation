<template lang="pug">
  slide
    h1 Instant Onboarding

    slide2sides
      template(#left)
        .flex.flex-col
          ul
            li Connect with people by simply
              b  scanning a QR code
            li No need to share your phone number
            li No need to set a password
          .grid.grow.place-content-center
            img(src="/qr-big.jpeg" width="300")
      template(#right)
        .flex.gap-2
          img(width="250" src="/onboarding.jpeg")
          img(width="250" src="/securejoin.jpeg")
  </template>

  <route lang="yaml">
  meta:
    heading: Instant Onboarding
    next: chatmail
  </route>
