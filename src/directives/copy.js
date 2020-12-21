const copy = {
  mounted(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        console.log('无复制内容')
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log('复制成功') // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  updated(el, { value }) {
    el.$value = value
  },
  unmounted(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default copy
