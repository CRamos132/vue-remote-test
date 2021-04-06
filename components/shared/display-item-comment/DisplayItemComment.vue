<template>
  <fieldset class="field-group">
    <label>Anotações sobre cliente:</label>
    <textarea v-model="anotacoes" class="text-field" @blur="emitter"></textarea>
  </fieldset>
</template>

<script>
export default {
  props: {
    initialValue: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      anotacoes: this.initialValue,
    }
  },
  methods: {
    emitter() {
      this.$emit('inputBlur', this.anotacoes)
    },
  },
}
</script>

<style scoped>
.field-group {
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.text-field {
  width: 80%;
  margin: 8px auto;
  height: 50px;
  padding: 8px;
}
</style>
