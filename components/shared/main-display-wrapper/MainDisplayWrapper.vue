<template>
  <main class="main-wrapper">
    <slot></slot>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.main-wrapper {
  width: 80%;
  margin: 0px auto;
  border-radius: 12px;
  background-color: #180f50;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
