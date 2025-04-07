<template lang="pug">
.flex.gap-10
    .grid(class="w-1/2")
      slot(name="left")
    .grid(class="w-1/2")
      slot(name="right")
</template>
