<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="toggleLeftDrawer">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="titulo">
          Los amigos de Winther
        </q-toolbar-title>
           <div class="titulo" v-if ="toggleLeftDrawer">{{ admin }}</div>
      </q-toolbar>
    </q-header>
    <!--show-if-above-->
    <q-drawer
      v-model="leftDrawerOpen"

      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8 text-center"
        >
          Menù de navegaciòn
        </q-item-label>
           <EssentialLink
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  props: {
    admin: {
      type: String,
      default: 'admin@gmail.com'
    },
    onSubmit: {
      type: Function,
      default: () => {
        console.log('submit')
      }
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'))
        }, 300)
      }
    }
  }
})
</script>
<style scoped>
.menu{
  padding: -5px;
}

@media (max-width: 768px) {

.titulo{
 font-size: 12px;
}
}
</style>
