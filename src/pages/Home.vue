<template>
<!--<img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Cr7-Wallpapers-HD.png" class="wave" alt="login-wave">-->
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
<div class="container flex">
    <div class="row" style="height: 90vh">
        <div class="col-0 col-md-6 flex justify-center content-center"> <img src="https://thinkmarketingmagazine.com/wp-content/uploads/2016/01/Real-Madrid-star-Cristiano-Ronaldo-will-open-his-CR7-footwear-brand-in-Alexandria.jpg" class="responsive imagen " alt="login-image"> </div>
        <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}" class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10"> <img src="https://www.prodirectsoccer.com/es/productimages/V3_1_Main/157414.jpg" alt="avatar"> </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 ellipsis flex justify-center">
                            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Iniciar sesiòn</h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-form @submit="onSubmit" class="q-gutter-md" autocomplete="off">
                        <q-input filled v-model="name" label="Escriba su email" hint="Correo electrònico" lazy-rules :rules="[ val => val && val.length > 3 || 'Ejemplo:Juan@gmail.com']" />

                        <q-input filled type="password" v-model="password" label="Escriba su contraseña" lazy-rules :rules="[ val => val && val.length > 6 || 'Contraseña']" />

                        <div class="text-center q-mt-sm q-gutter-lg">
                            <router-link class="text-dark" to="/" @click="alert = true">Recuperar contraseña?</router-link>
                            <router-link class="text-dark" to="/Register">Crear cuenta</router-link>
                        </div>
                        <div>

                            <q-btn label="Ingresar" type="submit" class="btn" name="admin@gmail.com" />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
            <!---Modal--->
            <q-dialog v-model="alert">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">Recuperar contraseña 📧</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <q-card-section>
                            <div class="text-h6">
                                <p>Por favor ingrese su correo electrónico</p>
                                <q-form @submit="Reset" class="q-gutter-md" autocomplete="off">
                                    <q-input filled v-model="correo" label="Escriba su email" hint="Correo electrònico" lazy-rules :rules="[ val => val && val.length > 3 || 'Ejemplo:Juan@gmail.com']" />
                                    <div>
                                        <q-btn label="Enviar" type="submit" class="btn" name="admin@gmail.com" />
                                    </div>
                                </q-form>
                            </div>
                        </q-card-section>
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn flat label="Cancelar" color="white" class="bg-negative" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
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
    props: {
        toggleLeftDrawer: {
            type: Boolean,
            default: false
        }
    },
    setup() {

        const $q = useQuasar()
        const correo = ref(null)
        const name = ref(null)
        const password = ref(null)

        return {
            alert: ref(false),
            model: ref('2019-02-22 21:02'),
            name,
            password,
            correo,
            slide: ref(1),
            autoplay: ref(true),
            admin: ref(false),
            Reset() {
                $q.notify({
                    message: 'Se enviò un correo de restablecimiento de contraseña, por favor revisa en tu bandeja de mensaje',
                    color: 'primary',
                    multiLine: true,
                    avatar: 'https://techcrunch.com/wp-content/uploads/2017/10/gmail-grid.png',
                    actions: [{
                        label: 'Aeptar',
                        color: 'yellow',
                        handler: () => {
                            /* ... */ }
                    }]
                })
                correo.value = ''
            },

            onSubmit() {
                // expresiones validar name
                const expresion = /\w+@\w+\.+[a-z-A-Z-0-9]/;
                if (!expresion.test(name.value)) {
                    // progress bar
                    $q.dialog({
                        title: 'Error',
                        message: 'Correo electrònico u/o contraseña no vàlidas',
                        color: 'negative',
                        icon: 'error_outline',
                        buttons: [{
                            label: 'Aceptar',
                            color: 'positive'
                        }]
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
                            message: `Espere estamos validando su sesiòn... ${percentage}%`
                        })

                        // if we are done, we're gonna close it
                        if (percentage === 100) {
                            clearInterval(interval)
                            dialog.update({
                                title: 'Exito!',
                                message: 'Sesiòn vàlida correctamente',
                                progress: false,
                                ok: true
                            })

                            setTimeout(() => {
                                window.location.href = '/Index';
                            }, 5000)
                        }
                    }, 1000)
                    name.value = ''
                    password.value = ''
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
    color: white;
    cursor:pointer;
}

.btn:hover {
    margin: auto;
    display: block;
    color: #000
}
</style>
