<template>
<!--carrucel-->
<img src="http://recreasport.com/wp-content/uploads/2017/04/SAM_0191-2.jpg" class="wave" alt="login-wave">
<!--<img src="https://raw.githubusercontent.com/Joabsonlg/quasar-authentication/master/src/assets/wave.png" class="wave" alt="login-wave">-->
<div class="container flex">
    <div class="row" style="height: 90vh">
        <div class="col-0 col-md-6 flex justify-center content-center"> <img src="https://thinkmarketingmagazine.com/wp-content/uploads/2016/01/Real-Madrid-star-Cristiano-Ronaldo-will-open-his-CR7-footwear-brand-in-Alexandria.jpg" class="responsive imagen" alt="login-image"> </div>
        <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}" class="col-12 col-md-6 flex content-center">
            <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center shadow-10"> <img src="https://www.prodirectsoccer.com/es/productimages/V3_1_Main/157414.jpg" alt="avatar"> </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 ellipsis flex justify-center">
                            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Registrarse</h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                        <q-input filled v-model="name" label="Nombres" hint="Ejemplo:Juan" lazy-rules :rules="[ val => val && val.length > 3 || ' Debe tener al menos 4 caràcteres']" />

                        <q-input id="password" name="password" filled v-model="email" label="Escriba su email" hint="Correo electrònico" lazy-rules :rules="[ val => val && val.length > 3 || 'Ejemplo:prueba_12@gmail.com']" />
                          <q-input filled type="password" v-model="password" label="Escriba su contraseña" lazy-rules :rules="[ val => val && val.length > 5 || 'Tener al menos 6 caràcteres']" />
                          <q-checkbox v-model="selection" val="teal" label="Mostrar contraseña" color="teal" />
                      <!--  <q-input filled type="number" v-model="age" label="Escriba su edad" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Solo se aceptan nùmeros',
          val => val > 11 && val < 100 || 'Debes ser mayor a 11 años'
        ]" />-->
                        <div class="text-center q-mt-sm q-gutter-lg">
                            <router-link class="text-dark" to="/Home">Ya tienes una cuenta?</router-link>
                        </div>
                        <div>
                            <q-btn label="Registrarse" type="submit" class="btn" />
                            <!--<q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />-->
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
        const email = ref(null)
         const password = ref(null)
        //const age = ref(null)
        const accept = ref(false)

        return {
          selection: ref([ 'teal', 'red' ]),
            name,
            email,
            password,
            //age,
            accept,
            slide: ref(1),
            autoplay: ref(true),
       // mostrar y ocultar contraseña
            mostrar() {
                this.selection = this.selection === 'password' ? 'text' : 'password'

            },
            onSubmit() {
                // expresiones validar name
                const expresion = /\w+@\w+\.+[a-z]/;
                if (!expresion.test(email.value)) {
                   $q.dialog({
                        title: 'Error',
                        message: 'El correo electrònico debe de ser de tipo email',
                        color: 'negative',
                        icon: 'error_outline',
                        buttons: [{
                            label: 'Aceptar',
                            color: 'positive'
                        }]
                    })
                   /* $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'El correo electrònico debe de ser de tipo email'
                    })*/
                    return false;


                } else {
                    $q.notify({
                        color: 'primary',
                        textColor: 'white',
                        icon: 'info',
                        message: 'Te has registrado exitosamente'
                    })

                  // ir a la ruta home una vez se registre
                     name.value = ''
                     email.value = ''
                     password.value = ''
                    // age.value = ''

                   /* setTimeout(() => {

                        this.window.location.href = '/Index';
                    }, 2000)*/
                }
            },

            onReset() {
                name.value = ''
                age.value = null
                accept.value = false
            }
        }
    },
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

    border-radius: 20px;
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

.container {
   /* background-color: #08020277;*/
    margin-top:15px;
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
