<template>
  <article class="main-item">
    <section class="main-item-thumb">
      <div>
        <h1>{{ empresa.company.name }}</h1>
        <h2>{{ empresa.company.catchPhrase }}</h2>
        <h4>Categorias: {{ empresa.company.bs }}</h4>
      </div>
      <div class="button-wrapper">
        <button-arrow v-rotate-icon @click.native="isOpen = !isOpen" />
      </div>
    </section>
    <transition name="detail-animation">
      <section v-if="isOpen" class="main-item-detail">
        <p>Nome: {{ empresa.name }} | Username: {{ empresa.username }}</p>
        <p>
          E-mail: <a :href="`mailto:${empresa.email}`">{{ empresa.email }}</a> |
          Telefone: {{ empresa.phone }}
        </p>
        <p>
          <a
            :href="`https://${empresa.website}`"
            target="_blank"
            rel="noopener"
            >{{ empresa.website }}</a
          >
        </p>
        <p>Rua: {{ empresa.address.street }}, {{ empresa.address.suite }}</p>
        <p>{{ empresa.address.city }} - {{ empresa.address.zipcode }}</p>
      </section>
    </transition>
  </article>
</template>

<script>
import ButtonArrow from '../button-arrow/ButtonArrow'
export default {
  components: {
    'button-arrow': ButtonArrow,
  },
  props: {
    empresa: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.main-item {
  width: 100%;
  margin: 0px auto;
  border-radius: 12px;
  background-color: #f1f3f4;
  padding: 16px;
  margin: 4px;
}
.main-item-thumb {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main-item-thumb > div > * {
  margin-bottom: 4px;
}
.main-item-detail p {
  margin: 8px 0px;
}
.main-item-detail a,
.main-item-detail a:visited {
  color: #3113f2;
}
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detail-animation-enter-active,
.detail-animation-leave-active {
  max-height: 200px;
  overflow: hidden;
  transition: max-height 0.8s;
}
.detail-animation-enter, .detail-animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0px;
  transition: max-height 0.8s;
}
</style>
