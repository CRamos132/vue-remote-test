<template>
  <div>
    <top-menu></top-menu>
    <div class="controller">
      <input
        class="filtro"
        type="search"
        placeholder="Filtrar por título"
        @input="filtro = $event.target.value"
      />
      <controller-categorias :categorias="categorias" @toggle="test" />
    </div>
    <main-display-wrapper>
      <loading-spinner v-if="isLoading" />
      <main-display-item
        v-for="(company, index) in empresasFiltradas"
        :key="index"
        :empresa-id="company.id"
        :empresa="company"
      />
    </main-display-wrapper>
  </div>
</template>

<script>
import TopMenu from '../components/shared/top-menu/TopMenu'
import ControllerCategorias from '../components/shared/controller-categorias/ControllerCategorias'
import MainDisplayWrapper from '../components/shared/main-display-wrapper/MainDisplayWrapper'
import MainDisplayItem from '../components/shared/main-display-item/MainDisplayItem'
import LoadingSpinner from '../components/shared/loading-spinner/LoadingSpinner'
export default {
  components: {
    'top-menu': TopMenu,
    'controller-categorias': ControllerCategorias,
    'main-display-wrapper': MainDisplayWrapper,
    'main-display-item': MainDisplayItem,
    'loading-spinner': LoadingSpinner,
  },
  data() {
    return {
      companies: [],
      filtro: '',
      categoriasSelecionadas: [],
      isLoading: true,
    }
  },
  computed: {
    empresasFiltradas() {
      const filtroPorNome = this.filtro
        ? this.companies.filter((empresa) =>
            empresa.company.name
              .toLowerCase()
              .includes(this.filtro.toLowerCase())
          )
        : this.companies

      if (this.categoriasSelecionadas.length > 0) {
        return filtroPorNome.filter((empresa) =>
          this.categoriasSelecionadas.every((categoria) =>
            empresa.company.bs.includes(categoria)
          )
        )
      } else {
        return filtroPorNome
      }
    },
    categorias() {
      const categoriasArray = []
      this.empresasFiltradas.forEach((empresa) => {
        const categoriasSeparadas = empresa.company.bs.split(' ')
        categoriasSeparadas.forEach((categoria) => {
          if (!categoriasArray.includes(categoria)) {
            categoriasArray.push(categoria)
          }
        })
      })
      return categoriasArray
    },
  },
  created() {
    this.isLoading = true
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((companies) => {
        this.isLoading = false
        this.companies = companies
      })
  },
  methods: {
    test(newCategorias) {
      this.categoriasSelecionadas = newCategorias
    },
  },
}
</script>

<style scoped="true">
.controller {
  width: 80%;
  margin: 20px auto 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  background-color: #f1f3f4;
  border-radius: 12px;
}
.filtro {
  width: 70%;
  padding: 4px;
  /* font-size: 1em; */
}
@media (max-width: 700px) {
  .filtro {
    width: 60%;
  }
}
/* #5EF2D7 light blue */
/* #3113F2 purple */
/* #3D9DF2 acqua */
</style>
