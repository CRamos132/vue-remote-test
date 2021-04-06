<template>
  <tbody>
    <tr>
      <td>
        {{ empresa.name }}
        <button @click="isOpen = !isOpen">Ver detalhes</button>
      </td>
      <td>{{ empresa.company.name }}</td>
      <td>{{ empresa.company.bs }}</td>
    </tr>
    <tr v-if="isOpen">
      <td colspan="3" rowspan="2">
        Name: {{ empresa.name }} | Username: {{ empresa.username }} | E-mail:
        {{ empresa.email }}
        <br />
        Rua: {{ empresa.address.street }}, {{ empresa.address.suite }}
        <br />
        {{ empresa.address.city }} - {{ empresa.address.zipcode }}
        <br />
        {{ empresa.company.name }}, {{ empresa.company.catchPhrase }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
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

<style>
tr {
  padding: 8px;
}
tr:hover {
  background-color: #ddd;
}
.filtro {
  width: 20vw;
}
</style>
