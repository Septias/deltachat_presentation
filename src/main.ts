import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.sass'
import 'uno.css'

routes.push({
  path: '',
  redirect: 'intro'
})

export const createApp = ViteSSG(
  App,
  { routes },
)
