<template>
  <table class="main-table">
    <slot></slot>
  </table>
</template>

<script>
export default {}
</script>

<style>
.main-table {
  width: 80%;
  margin: 0 auto;
  max-width: 100vw;
  border-radius: 12px;
}
.main-table td,
.main-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.main-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
