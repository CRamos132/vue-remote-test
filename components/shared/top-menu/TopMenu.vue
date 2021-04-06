<template>
  <nav class="top-nav">
    <logo class="logo" />
  </nav>
</template>

<script>
import Logo from '../../icons/Logo'
export default {
  components: {
    logo: Logo,
  },
}
</script>

<style scoped>
.top-nav {
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: #f1f3f4;
  flex-direction: row;
  align-items: center;
}
.logo {
  margin-left: 1vw;
}
</style>
