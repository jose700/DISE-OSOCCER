<template>
<div class="col-span-12 lg:col-span-6">
    <!-- BEGIN: Stacked Bar Chart -->
     <button class="btn btn-dark" @click="Reporte()">Imprimir reportes</button>
     <br><br>
    <div class="intro-y box">
        <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
            <h2 class="font-medium text-base mr-auto text-center">
                Datos estadisticos de Ingresos
            </h2>

            <div class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">

                <img src="https://global-uploads.webflow.com/59e16042ec229e00016d3a66/5e62f6f4dad6467a6ba6a589_pie%20sample%203.jpeg" alt="chart">

            </div>
        </div>

    </div>
    <!-- END: Stacked Bar Chart -->
    <!-- BEGIN: Line Chart -->
    <div class="intro-y box mt-5">
        <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
            <h2 class="font-medium text-base mr-auto">
                Datos
            </h2>
            <div class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">

                <img src="https://konradsobon.gitbooks.io/mandrill-primer/content/barChart/barChartImage.PNG" alt="chart">

            </div>
        </div>

    </div>
    <!-- END: Line Chart -->
    <!-- BEGIN: Pie Chart -->
    <div class="intro-y box mt-5">
        <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
            <h2 class="font-medium text-base mr-auto">
                Datos
            </h2>
            <div class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">

                <img src="https://docs.devexpress.com/MobileControls/images/xf/charts/getting-started/lesson1/pie-chart-lesson-legend-labels-tooltips-final.png" alt="chart">

            </div>
        </div>

    </div>
    <!-- END: Pie Chart -->
</div>
</template>

<script>
import {
    ref
} from 'vue'
import print from 'print-js'
export default {
    setup() {
        return {
            Reporte() {
               printJS({printable: 'https://docs.devexpress.com/MobileControls/images/xf/charts/getting-started/lesson1/pie-chart-lesson-legend-labels-tooltips-final.png', type: 'image', header: 'Reportes de Ingresos'})
            },
        }
    },
}
</script>
<style scoped>
@import url("../dist/css/app");

img {
    width: 100%;
    max-width: 50%;
    cursor: pointer;
}
.btn{
   cursor:pointer;
}
</style>
