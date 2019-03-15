<template>
  <div id="app">
    <transition :name="pageAnimate">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pageAnimate: ''
    }
  },
  watch: {
    $route (to, from) {
      // 前进
      if (to.meta.index > from.meta.index) {
        this.pageAnimate = 'slide-left'
      } else {
        this.pageAnimate = 'slide-right'
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body,html,#app{
  height: 100%;
}
body {
  background-color: #fbf9fe;
}
.child-view {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1px;
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
