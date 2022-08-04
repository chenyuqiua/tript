import { onUnmounted, onMounted, ref } from 'vue';
import { throttle } from 'underscore';



export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 定义滚动事件处理函数 添加节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      // 获取当前窗口的高度
      clientHeight.value = document.documentElement.clientHeight
      // 获取已滚动的高度
      scrollTop.value = Math.ceil(document.documentElement.scrollTop)
      // 获取总共可滚动的高度
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      // 获取当前窗口的高度
      clientHeight.value = el.clientHeight
      // 获取已滚动的高度
      scrollTop.value = Math.ceil(el.scrollTop)
      // 获取总共可滚动的高度
      scrollHeight.value = el.scrollHeight
    }
    // console.log(clientHeight.value, scrollTop.value, scrollHeight.value)


    if (clientHeight.value + scrollTop.value >= scrollHeight.value ||
      clientHeight.value + scrollTop.value + 1 >= scrollHeight.value
    ) {
      isReachBottom.value = true
    }
  }, 100)
  // 进入页面监听window窗口滚动
  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scrollListenerHandler)
  }),

  // 当页面离开时取消事件监听
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}