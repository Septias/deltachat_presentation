<template lang="pug">
  slide
    h1 Instant Onboarding

    slide2sides
      template(#left)
        ul
          li Connect with people by simply scanning a QR code
          li No need to share your phone number
          li No need to set a password
      template(#right)
        img(width="250" src="/onboarding.jpeg")
  </template>

  <route lang="yaml">
  meta:
    heading: Instant Onboarding
    next: chatmail
  </route>
