import { createApp } from 'vue'
import App from './App.vue'

const loadScript = (src, crossorigin=true) => new Promise(function (resolve, reject) {
  const $script = document.createElement('script')
  $script.onload = function () {
    resolve(this)
  }
  $script.onerror = function (e) {
    reject(e)
  }
  crossorigin && $script.setAttribute('crossorigin', 'anonymous')
  $script.src = src
  document.body.appendChild($script)
})

const loadComponent = (name) => loadScript(`/${name}.js`)

;(async () => {
  await loadComponent('test1')
  const app = createApp(App)
  app.use(window['test1'].default)
  app.mount('#app')
})();




