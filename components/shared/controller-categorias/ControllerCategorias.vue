<template>
  <div v-if="isOpen" class="lista-categorias ativo">
    <div class="lista-controller">
      <button-base label="Limpar seleção" @acao="cleanCat" />
      <button-base label="X" @acao="isOpen = !isOpen" />
    </div>
    <div
      v-for="(categoria, index) in categorias"
      :key="index"
      class="input-group"
    >
      <input
        :id="categoria"
        v-model="categoriasSelecionadas"
        type="checkbox"
        :value="categoria"
        @click="emit"
      />
      <label :for="categoria">{{ categoria }}</label>
    </div>
  </div>
  <div v-else class="lista-categorias">
    <button-base label="Filtrar" @acao="isOpen = !isOpen" />
  </div>
</template>

<script>
import ButtonBase from '../button-base/ButtonBase'
export default {
  components: {
    'button-base': ButtonBase,
  },
  props: {
    categorias: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      isOpen: false,
      categoriasSelecionadas: [],
    }
  },
  methods: {
    emit(event) {
      let newCategorias = this.categoriasSelecionadas
      if (event.target.checked) {
        newCategorias = this.categoriasSelecionadas.concat(event.target.value)
      } else {
        newCategorias = newCategorias.filter(
          (categoria) => categoria !== event.target.value
        )
      }
      this.categoriasSelecionadas = newCategorias
      this.$emit('toggle', newCategorias)
    },
    cleanCat() {
      this.categoriasSelecionadas = []
      this.$emit('toggle', [])
    },
  },
}
</script>

<style>
.lista-categorias {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 18vw;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}
.ativo {
  background-color: #d6dde0;
}
.lista-controller {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.input-group {
  margin: 2px 0px;
  text-transform: capitalize;
}
@media (max-width: 700px) {
  .lista-categorias {
    width: 30vw;
  }
  .ativo {
    width: 40vw;
  }
}
</style>
