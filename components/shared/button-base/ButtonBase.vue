<template>
  <button class="button" @click="emit">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
  },
  methods: {
    emit() {
      this.$emit('acao')
    },
  },
}
</script>

<style scoped>
.button {
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #180f50;
}
</style>
