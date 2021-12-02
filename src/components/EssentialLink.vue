<template>
    <q-parallax>
            <div class="q-pa-md titulo" style="max-width: 350px">

                <q-list bordered class="ocultar">

                    <q-item clickable v-ripple to="/Index">
                        <q-item-section avatar>
                            <q-avatar color="teal" text-color="white" icon="home" />
                        </q-item-section>

                        <q-item-section class="texto">Inicio</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple to="/Factura">
                        <q-item-section avatar>
                            <q-avatar color="grey-2" text-color="negative" icon="fas fa-file-pdf" />
                        </q-item-section>

                        <q-item-section class="texto">Factura</q-item-section>
                    </q-item>
                    <!--<q-item clickable v-ripple to="/Login">
                        <q-item-section avatar>
                            <q-avatar color="primary" text-color="white" icon="login" />
                        </q-item-section>

                        <q-item-section class="texto">Ingresar</q-item-section>
                    </q-item>-->

                    <q-item clickable v-ripple to="/Cancha">
                        <q-item-section avatar>
                            <q-avatar rounded color="dark" text-color="white" icon="fas fa-futbol" />
                        </q-item-section>

                        <q-item-section class="texto">Canchas

                        </q-item-section>
                    </q-item>
                       <q-item clickable v-ripple to="/Users">
                        <q-item-section avatar>
                            <q-avatar rounded square text-color="white"  color="teal-10">
                              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>
                        </q-item-section>
                        <q-item-section class="texto">Clientes</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple to="/Disponible">
                        <q-item-section avatar>
                            <q-avatar color="warning" text-color="white">
                              D
                            </q-avatar>
                        </q-item-section>

                        <q-item-section class="texto">Disponibilidad</q-item-section>
                    </q-item>

                    <q-separator />
                    <q-item clickable v-ripple to="/Reservaciones">
                        <q-item-section avatar>
                            <q-avatar rounded square text-color="white" color="teal-10">
                                R
                            </q-avatar>
                        </q-item-section>
                        <q-item-section class="texto">Reservaciones</q-item-section>
                    </q-item>


                    <q-item clickable v-ripple to="/Horarios">
                        <q-item-section avatar>
                            <q-avatar rounded color="positive" text-color="white">
                                <!--<img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
                                ⏱️
                            </q-avatar>
                        </q-item-section>
                        <q-item-section class="texto">Horarios</q-item-section>
                    </q-item>

          <q-item clickable v-ripple @click="salir()">
                        <q-item-section avatar>
                            <q-avatar rounded color="white" text-color="white">
                                <img src="https://pic.onlinewebfonts.com/svg/img_356268.png">
                            </q-avatar>
                        </q-item-section>
                        <q-item-section class="texto">Cerrar sesiòn</q-item-section>
                    </q-item>
                    <q-separator />

                </q-list>
            </div>
        </q-parallax>
</template>

<script>
import { defineComponent } from 'vue'
import swal from 'sweetalert';
export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  setup(){
    return {
      salir(){
        swal({
          title: "¿Salir?",
          text: "¡Estàs seguro de cerrar sesiòn!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
                    if (willDelete) {
                        swal("Su sesiòn se cerrara en breve", {
                            icon: "info",
                        });
                        setTimeout(() => {
                               window.location.href = '/';
                        }, 4000);
                    }
                });
      }
    }
  }
});

</script>
<style scoped>
@media (max-width: 768px) {

.titulo{
 font-size: 12px;
}
}
</style>
