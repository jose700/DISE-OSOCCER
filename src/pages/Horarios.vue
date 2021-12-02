<template>
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
  <div class="q-pa-md">
    <q-table class="texto"
      grid
      title="Horarios de Atenciòn"
      :rows="rows"
      :columns="columns"
      row-key="hora"
      hide-header
      hide-bottom
    >

    </q-table>
  </div>
  <div class=" container flex">
  <div class="q-pa-md container">
    <div class="q-gutter-sm">
      <q-badge color="teal">
        Model: {{ model }}
      </q-badge>
      <q-badge color="purple" text-color="white" class="q-ma-md">
        Mask: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>

  </div>
</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    hora: 'desc',

    label: 'Lunes a Sàbados',

    align: 'left',
    field: row => row.hora,

  },

]

const rows = [
  {
    hora: '9h00 am hasta 22h00 pm',
  },

]

export default {
  setup () {
    return {
      model: ref('2021-10-20 09:02'),
      filter: ref(''),
      columns,
      rows
    }
  }
}
</script>

<style scoped>
.wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
}
.texto{
     background-color: #08020277;
     color:white;
     padding:2px
}
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>

