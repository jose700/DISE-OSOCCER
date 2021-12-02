<template>
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
<div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 90px" class="shadow-2 rounded-borders">
        <q-header elevated class="bg-dark">

            <q-toolbar inset>
                <q-breadcrumbs active-color="white" style="font-size: 10px">
                    <h1 class="center">Reportes</h1>
                </q-breadcrumbs>
            </q-toolbar>
        </q-header>
    </q-layout>
     <q-toolbar inset>
                        <q-breadcrumbs active-color="white" style="font-size: 10px">
                            <q-btn round color="negative" icon="fas fa-file-pdf" @click="print()" />
                            <q-btn round color="secondary" icon="fas fa-file-excel" @click="ImprimirExcel()" />
                            <!--<q-btn round color="primary" icon="fas fa-file-word" />-->
                        </q-breadcrumbs>
                    </q-toolbar>
     <div class="q-pa-md titulo">
     <q-table id="table" title="Datos de los clientes" :rows="rows" :columns="columns" row-key="name" :separator="separator" :filter="filter" class="separar titulo bg-grey-2" />
</div>
  </div>
</template>

<script>
import {
    ref
} from 'vue'
import print from 'print-js'
import 'table2excel';
const columns = [{
        id: 0,
        required: true,
        label: 'Id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'nombres',
        align: 'center',
        label: 'Nombres',
        field: 'nombres',
        sortable: true
    },
    {
        name: 'apellidos',
        label: 'Apellidos',
        field: 'apellidos',
        sortable: true
    },
    {
        name: 'cedula',
        label: 'Cèdula',
        field: 'cedula'
    },
    {
        name: 'inicio',
        label: 'Fecha Inicio',
        field: 'inicio'
    },
    {
        name: 'fin',
        label: 'Fecha Fin',
        field: 'fin'
    },
    {
        name: 'Total',
        label: 'Total a Pagar',
        field: 'Total'
    },

]

const rows = [{
        id: 1,
        nombres: 'Alex',
        apellidos: 'Medranda',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 pm',
        Total: '$20.00'

    },
    {
        id: 2,
        nombres: 'Andree',
        apellidos: 'Velèz',
        cedula: 13232456677,
        inicio: '2020-05-01 Hora: 10h00 am',
        fin: '2020-01-01 Hora:12:00 am',
        Total: '$20.00'
    },
    {
        id: 3,
        nombres: 'Anndry',
        apellidos: 'Cedeño',
        cedula: 13232456677,
        inicio: '2020-10-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 4,
        nombres: 'Boris',
        apellidos: 'Loor',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },

    {
        id: 5,
        nombres: 'Edison',
        apellidos: 'Solorzano',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 6,
        nombres: 'Erick',
        apellidos: 'Mera',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'

    },
    {
        id: 7,
        nombres: 'Jandry',
        apellidos: 'Sanchèz',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 8,
        nombres: 'Josè',
        apellidos: 'Campuzano',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 9,
        nombres: 'Kenig',
        apellidos: 'Pico',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 10,
        nombres: 'Mauro',
        apellidos: 'Mero',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },
    {
        id: 11,
        nombres: 'Yandry',
        apellidos: 'Macìas',
        cedula: 13232456677,
        inicio: '2020-01-01 Hora: 09h00 am',
        fin: '2020-01-01 Hora:11:00 am',
        Total: '$20.00'
    },

]

export default {
    setup() {
        return {
            filter: ref(''),
            separator: ref('vertical'),
            columns,
            rows,
            print() {
                printJS({
                    printable: rows,
                    properties: ['nombres', 'apellidos', 'cedula', 'inicio', 'fin', 'Total'],
                    type: 'json',
                    gridHeaderStyle: 'color: green;  border: 2px solid brown-7;',
                    gridStyle: 'border: 2px solid #3971A5',header: 'Reportes de clientes', 
                    documentTitle: 'Reportes de clientes',
                })
                /*printJS('https://okdiario.com/img/2018/04/26/como-aprender-a-jugar-al-futbol-freestyle.jpg', 'image')*/
            },
            ImprimirExcel() {
                var table2excel = new Table2Excel();
                table2excel.export(document.querySelectorAll("table"), 'Reporte');
            },
        }
    },
}
</script>

<style scoped>
.center {
    font-size: 20px;
    text-align: center;
}
.wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
}

</style>
