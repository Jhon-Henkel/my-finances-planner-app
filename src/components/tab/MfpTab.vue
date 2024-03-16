<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
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
                <!-- todo desenvolver opções de inserir novo (transação, despesa, ganho, etc...) -->
                <ion-tab-button tab="add">
                    <ion-icon name="add-outline" />
                </ion-tab-button>
                <!-- todo desenvolver menu -->
                <ion-tab-button tab="menu">
                    <ion-icon name="menu-outline" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style scoped>
ion-tab-button {
    --color-selected: var(--ion-color-success);
}
</style>
