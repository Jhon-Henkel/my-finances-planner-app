import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {IonicVue} from '@ionic/vue'
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'
import './theme/variables.css'
import moneyMask from './directives/mask/money/moneyMask'

const app = createApp(App)
    .directive('money', moneyMask)
    .use(IonicVue)
    .use(router);

router.isReady().then(() => {
    app.mount('#app');
});
