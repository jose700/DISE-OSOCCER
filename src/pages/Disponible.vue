<template>
<div class="q-pa-md">
    <q-table title="Canchas disponibles y no disponibles" :rows="rows" :columns="columns" row-key="name" v-model:expanded="expanded" hide-header hide-bottom>

        <template v-slot:header="props">
            <q-tr :props="props">
                <q-th auto-width />
                <q-th v-for="col in props.cols" :key="col.name" :props="props">
                    {{ col.label }}
                </q-th>
            </q-tr>
        </template>

        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td auto-width>
                    <q-toggle v-model="props.expand" checked-icon="add" unchecked-icon="remove" />
                </q-td>

                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                    {{ col.value }}
                </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                    <div class="text-left">Cancha no disponible por el momento: {{ props.row.name }}.</div>
                </q-td>
            </q-tr>
        </template>

    </q-table>
</div>
</template>

<script>
import {
    useQuasar
} from 'quasar'
import {
    ref
} from 'vue'

const columns = [{
        name: 'name',
        required: true,
        label: 'Nùmeros de cancha',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'Cancha',
        align: 'center',
        field: 'fecha',
        sortable: true
    },
    {
        name: 'Cancha',
        align: 'center',
        field: 'fin',

        sortable: true
    },
    {
        name: 'Inicio de horario',
        field: 'fat',
        sortable: true
    },
    {
        name: 'Hora Fin',
        label: 'Hora Fin',
        field: 'Fin',
        sortable: true
    },

]

const rows = [{
        name: 'Mùltiple',
        fecha:'Fecha: 10 de Octubre del 2021',
        fin: 'Hora de inicio : 10h00 am',
        fat: 'Hora final:11h00 am',

    },
    {
        name: 'La esquina',
        fecha:'Fecha: 12 de octubre del 2021',
        fin: 'Hora de inicio : 15h00 pm',
        fat: 'Hora final:17h00 pm',

    },
    {
        name: 'Amigos de Walter',
        fecha:'Fecha:10 de octubre del 2020',
        fin: 'Hora de inicio : 18h00 pm',
        fat: 'Hora final:19h00 pm',
    },
    {
        name: 'Facci',
        fecha:'Fecha: 15 de octubre del 2021',
        fin: 'Hora de inicio : 19h00 pm',
        fat: 'Hora final:19h00 pm',
    },
    {
        name: 'Los Poderosos',
        fecha:'Fecha: 18 de octubre del 2021',
        fin: 'Hora de inicio : 18h00 pm',
        fat: 'Hora final:19h00 pm',
    },
]

export default {
    setup() {
        const $q = useQuasar()
        console.log($q)
        return {
            expanded: ref([ // Array of row keys
                'Cancha no disponible por el momento'
            ]),

            columns,
            rows
        }
    }
}
</script>
