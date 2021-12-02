<template>
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
  <div class="q-pa-md titulo">
    <q-option-group
      v-model="separator"
      inline
      color:white
      class="q-mb-md texto"
      :options="[
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Celda', value: 'cell' },
        { label: 'Ninguna', value: 'none' },
      ]"
    />
 <div>
     <form autocomplete="off">
       <input type="text" name="buscar" id="buscar" placeholder="Bùsqueda ràpida" class="formulario" v-model="filter">
     </form>

    </div>
    <br>
    <q-table
      title="Datos de los clientes"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
      :filter="filter"
  class="separar titulo"/>
  </div>
</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    id: 0,
    required: true,
    label: 'Id',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nombres', align: 'center', label: 'Nombres', field: 'nombres', sortable: true },
  { name: 'apellidos', label: 'Apellidos', field: 'apellidos', sortable: true },
  { name: 'cedula', label: 'Cèdula', field: 'cedula' },
  { name: 'inicio', label: 'Fecha Inicio', field: 'inicio' },
  { name: 'fin', label: 'Fecha Fin', field: 'fin' },

]

const rows = [
  {
    id: 1,
    nombres: 'Alex',
    apellidos: 'Medranda',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 pm',

  },
  {
    id: 2,
    nombres: 'Andree',
    apellidos: 'Velèz',
    cedula: 13232456677,
    inicio: '2020-05-01 Hora: 10h00 am',
    fin: '2020-01-01 Hora:12:00 am',
  },
  {
    id: 3,
    nombres: 'Anndry',
    apellidos: 'Cedeño',
    cedula: 13232456677,
    inicio: '2020-10-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',

  },
  {
    id: 4,
    nombres: 'Boris',
    apellidos: 'Loor',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',

  },

  {
    id: 5,
    nombres: 'Edison',
    apellidos: 'Solorzano',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',

  },
  {
    id: 6,
    nombres: 'Erick',
    apellidos: 'Mera',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',

  },
  {
    id: 7,
    nombres: 'Jandry',
    apellidos: 'Sanchèz',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',
  },
  {
    id: 8,
    nombres: 'Josè',
    apellidos: 'Campuzano',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',
  },
  {
    id: 9,
    nombres: 'Kenig',
    apellidos: 'Pico',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',
  },
  {
    id: 10,
    nombres: 'Mauro',
    apellidos: 'Mero',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',
  },
  {
    id: 11,
    nombres: 'Yandry',
    apellidos: 'Macìas',
    cedula: 13232456677,
    inicio: '2020-01-01 Hora: 09h00 am',
    fin: '2020-01-01 Hora:11:00 am',
  }
]

export default {
  setup () {
    return {
      filter: ref(''),
      separator: ref('vertical'),
      columns,
      rows,

    }
  },
  computed:{
 resultQuery(){
      if(this.searchQuery){
      return this.rows.filter((rows)=>{
          //this.busqueda=true
        return this.searchQuery.toLowerCase().split(' ').every(v => rows.nombres.toLowerCase().includes(v))
      })
      }else{
        return this.rows;
      }
    },
  },

}

</script>
<style scoped>
.formulario {
   background-color: #00030177;
   padding: 20px;
   border-radius: 10px;
   border: 1px solid #27df55;

   margin-right: auto;
   width: 80%;
   color: white;
}.separar{
  padding: 10px;
}
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
@media (max-width: 768px) {

.titulo{
 font-size: 12px;
}
}
</style>

