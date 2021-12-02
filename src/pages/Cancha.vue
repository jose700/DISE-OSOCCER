<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="index in 12" :key="index">
        <q-img src="http://static.tiempo.com.mx/uploads/imagen/imagen/342436/principal_unnamed-2020-07-23t080434394.jpg" />

        <q-card-section>
            <q-btn @click="carousel = true" fab color="dark" icon="far fa-eye" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);" />

            <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                    Cancha Mùltiple
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
                $ 20.00, la hora( 60 minutos )
            </div>
            <div class="text-caption text-grey">
                Màximo de jugadores 22
            </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
            <q-item clickable v-ripple to="/Reservaciones">
                <q-btn flat round icon="event" />
                <q-btn flat color="primary">
                    Reservar
                </q-btn>
            </q-item>
        </q-card-actions>
    </q-card>
</div>
<q-dialog v-model="carousel">
    <q-carousel transition-prev="slide-right" transition-next="slide-left" swipeable animated v-model="slide" control-color="primary" navigation-icon="radio_button_unchecked" navigation padding height="500px" class="bg-white shadow-1 rounded-borders">
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
            <img src="https://agorasport.es/wp-content/uploads/PHOTO-2019-06-26-17-26-47-1.jpg" alt="cancha" class="foto">
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="column no-wrap flex-center">

            <img src="http://3.bp.blogspot.com/-0KhMB3n9eVs/WMDnP9tRQqI/AAAAAAAAD8c/SguxUL2vpzE2GjO8tzpwGlGmey1V0X2ogCK4B/s1600/canchas-de-futbol-1.jpg" class="foto">

            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <img src="https://www.competize.com/blog/wp-content/uploads/2020/10/cancha-futbol-sintetica-artifical-pasto-natural.jpg" alt="cancha" class="foto">
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
            <img src="https://www.ledsolution.com.ar/documentos/1/5_reflectores-led-cancha-de-futbol.jpg" alt="cancha" class="foto">
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="column no-wrap flex-center">
            <img src="https://agorasport.co/wp-content/uploads/9_1-1-1024x576.jpg" alt="cancha" class="foto">
            <div class="q-mt-md text-center">
                {{ lorem }}
            </div>
        </q-carousel-slide>
    </q-carousel>
</q-dialog>
</template>

<script>
import {
    ref
} from 'vue'

export default {
    setup() {
        return {
            slide: ref(1),
            autoplay: ref(true),
            stars: ref(4),
            carousel: ref(false),
            card: ref(false),
            sliders: ref(false),
            lorem: 'Màximo 22 jugadores',

            stars: ref(3),

            slideVol: ref(39),
            slideAlarm: ref(56),
            slideVibration: ref(63)
        }
    }
}
</script>

<style scoped>
.my-card {
    width: 100%;
    max-width: 300px
}

.foto {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 300px;
    border: none;
}
</style>
