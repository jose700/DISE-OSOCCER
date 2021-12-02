<template>
<div class=" container flex">
    <div class="q-pa-md">
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
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
<div class="container flex">
    <div class="row" style="height: 90vh">
        <div class="col-0 col-md-6 flex justify-center content-center"> <img src="https://thinkmarketingmagazine.com/wp-content/uploads/2016/01/Real-Madrid-star-Cristiano-Ronaldo-will-open-his-CR7-footwear-brand-in-Alexandria.jpg" class="responsive imagen " alt="login-image"> </div>
        <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}" class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}" class="mover">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10"> <img src="https://www.prodirectsoccer.com/es/productimages/V3_1_Main/157414.jpg" alt="avatar"> </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 ellipsis flex justify-center">
                            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Datos del cliente</h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-form @submit="onSubmit" class="q-gutter-md" autocomplete="off">
                        <q-input filled v-model="name" id="name" label="Escriba su nombre" hint="nombres" lazy-rules :rules="[ val => val && val.length > 3 || 'Ejemplo:Juan']" />

                        <q-input filled type="text" id="apellidos" v-model="apellidos" label="Escriba su apellido" lazy-rules :rules="[ val => val && val.length > 3 || 'Ejemplo:Mero']" />

                        <q-input filled type="text" id="cedula" v-model="cedula" label="Escriba su nº de cèdula" lazy-rules :rules="[val => val !== null && val !== '' || 'Solo se aceptan nùmeros',
                                  val => val.length > 9 && val.length < 11 || 'Solo debe tener 10 dìgitos']" />
                        <div>
                            <q-btn label="Guardar" type="submit" class="btn" />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    useQuasar
} from 'quasar'
import {
    ref
} from 'vue'
export default {

    setup() {

        const $q = useQuasar()

        const name = ref(null)
        const apellidos = ref(null)
        const cedula = ref(null)

        return {
            model: ref('2021-11-20 21:02'),
            name,
            apellidos,
            cedula,
            slide: ref(1),
            autoplay: ref(true),

            onSubmit() {
                // expresiones validar name, cedula
                const expresion = /[a-z-A-Z]/;
                if (!expresion.test(name.value)) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'El campo nombre solo se aceptan letras'
                    })
                    return false;
                } else {
                    const dialog = $q.dialog({
                        message: 'Cargando... 0%',
                        progress: true, // we enable default settings
                        persistent: true, // we want the user to not be able to close it
                        ok: false // we want the user to not be able to close it
                    })
                    // we simulate some progress here...
                    let percentage = 0
                    const interval = setInterval(() => {
                        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

                        // we update the dialog
                        dialog.update({
                            message: `Guardando informaciòn... ${percentage}%`
                        })

                        // if we are done, we're gonna close it
                        if (percentage === 100) {
                            clearInterval(interval)
                            dialog.update({
                                title: 'Exito!',
                                message: 'La informaciòn se guardo exitosamente',
                                progress: false,
                                ok: true
                            })
                        }
                    }, 1000)
                    name.value = ''
                    apellidos.value = ''
                    cedula.value = ''
                }
            }
        }
    }
}
</script>

<style scoped>
body {
    background-color: #afabab;
}

q-carousel {
    border-radius: 50px;
    border: none
}

.imagen {

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border: none;
    opacity: 0.0;

}

.wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
}

.text-h2 {
    font-size: 1.5rem;
}

.container2 {
    background-color: #08020277;
}

h1 {
    color: white;
    font-size: 2rem;
    text-align: center;
    background-color: #08020277;
}

.btn {
    margin: auto;
    display: block;
    background-color: #3B445B;
    color: white
}

.btn:hover {
    margin: auto;
    display: block;
    color: #000
}

.mover {
    margin-top: -109%;
    height: 100;
    max-height: 85%;
}

@media (max-width: 768px) {

    .mover {
        margin-top: auto;
        height: 100;
        max-height: 75%;
    }
}
</style>
