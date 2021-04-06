import Vue from 'vue'

Vue.directive('rotate-icon', {
  bind(el, bind, vnode) {
    el.addEventListener('click', () => {
      el.style.transition = 'transform 0.5s'
      if (el.style.transform === 'rotate(180deg)') {
        el.style.transform = `rotate(0deg)`
      } else {
        el.style.transform = `rotate(180deg)`
      }
    })
  },
})
