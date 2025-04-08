<template lang="pug">
  slide
    h1 Delta Chat Features
    slide2sides
      template(#left)
        dc-features-md
      template(#right)
        .grid.place-content-center
          img.p-4(src="/delta-chat.svg", alt="Delta Chat Features", width="350px")
  </template>

  <route lang="yaml">
  meta:
    heading: Übersicht der Delta Chat Features
    next: instant-onboarding
  </route>
