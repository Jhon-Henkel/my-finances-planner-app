<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet, IonModal} from '@ionic/vue';
import MfpMenuModalItem from "@/components/tab/MfpMenuModalItem.vue";
import {ref} from "vue";
import MenuItems from "@/settings/menuItems";

const modalBreakpoints: Array<number> = [0, 0.85];
const modal = ref();

function closeModal() {
    modal.value.$el.dismiss();

}
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/inicio">
                    <ion-icon name="home-outline" />
                </ion-tab-button>
                <ion-tab-button tab="movements" href="/movimentacoes">
                    <ion-icon name="swap-horizontal-outline"/>
                </ion-tab-button>
                <ion-tab-button tab="add" id="mfp-tab-plus-modal" expand="block">
                    <ion-icon name="add-outline" />
                </ion-tab-button>
                <ion-tab-button tab="settings" href="/configuracoes">
                    <ion-icon name="settings-outline" />
                </ion-tab-button>
                <ion-tab-button tab="menu" id="mfp-tab-menu-modal" expand="block">
                    <ion-icon name="menu-outline" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>

        <ion-modal
            trigger="mfp-tab-plus-modal"
            :initial-breakpoint="modalBreakpoints[1]"
            :breakpoints="modalBreakpoints"
            handle-behavior="cycle"
        >
            <!-- todo aqui talvez teremos problemas, pois os inserts também são modais-->
            <h1 class="ion-text-center">Desenvolver o adicionar</h1>
        </ion-modal>
        <ion-modal
            trigger="mfp-tab-menu-modal"
            :initial-breakpoint="modalBreakpoints[1]"
            :breakpoints="modalBreakpoints"
            handle-behavior="cycle"
            ref="modal"
        >
            <div class="ion-padding-start ion-padding-end">
                <h1 class="ion-text-center ion-padding-top">Menu</h1>
                <div v-for="item in MenuItems" class="ion-padding-top">
                    <mfp-menu-modal-item :icon="item.icon" :route-name="item.routeName" @go-to-route="closeModal">
                        {{ item.label }}
                    </mfp-menu-modal-item>
                </div>
            </div>
        </ion-modal>
    </ion-page>
</template>

<style scoped>
ion-tab-button {
    --color-selected: var(--ion-color-success);
}
</style>
