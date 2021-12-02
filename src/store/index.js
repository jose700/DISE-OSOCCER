import { firebase } from 'boot/configFirebase.js'
import { reactive } from 'vue';
const state = reactive({});

const actions = {
    handleAuthStateChanged() {
        console.log('Hola');
    }
}
export default {
    state,
    actions
}