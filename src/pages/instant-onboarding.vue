<template lang="pug">
  slide
    h1 Instant Onboarding

    slide2sides
      template(#left)
        .flex.flex-col
          ul
            li Verbinden Sie sich mit Freunden, indem Sie einfach
              b  einen QR-Code scannen
            li Keine Notwendigkeit, die Telefonnummer zu teilen
            li Kein Passwort erforderlich
            li.text-blue-600 https://delta.chat/de/download
          .grid.grow.place-content-center
            img(src="/qr-big.webp" width="300")
      template(#right)
        .flex.gap-4
          img(width="250" src="/onboarding.webp")
          img(width="250" src="/securejoin.webp")
  </template>

  <route lang="yaml">
  meta:
    heading: Instant Onboarding
    next: chatmail
  </route>
