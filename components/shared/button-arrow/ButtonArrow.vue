<template>
  <button aria-label="abrir detalhes" class="button" @click="emit">
    <arrow-icon />
  </button>
</template>

<script>
import Arrow from '../../icons/Arrow'
export default {
  components: {
    'arrow-icon': Arrow,
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
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #180f50;
}
.button svg {
  height: 50px;
  width: auto;
}
</style>
