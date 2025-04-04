import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import { defineComponent } from 'vue/dist/vue.esm-bundler'

import '@unocss/reset/tailwind.css'
import './styles/main.sass'
import 'uno.css'

const App = defineComponent({
  template: '<router-view />',
})

routes.push({
  path: '',
  redirect: 'intro'
})

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.router.beforeEach((to) => {
      // @ts-expect-error idk
      MathJax.typeset()
    })
  },
)
