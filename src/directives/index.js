import copy from './copy'
import longpress from './longpress'
import emoji from './emoji'
import permission from './permission'
import waterMarker from './watermark'
import draggable from './drag'
// 自定义指令
const directives = {
  copy,
  longpress,
  emoji,
  permission,
  waterMarker,
  draggable
}
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      console.log(key)
      Vue.directive(key, directives[key])
    })
  },
}
