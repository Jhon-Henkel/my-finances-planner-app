<script setup lang="ts">
import {IonButton, IonContent, IonIcon, IonModal} from "@ionic/vue";
import {ref} from "vue";

const modal = ref();
</script>

<template>
    <ion-button class="ion-no-padding ion-margin-end" id="mfp-monthly-balance-form-modal" expand="block">
        <ion-icon name="add-circle" color="success" class="top-icon"/>
    </ion-button>
    <ion-modal
        trigger="mfp-monthly-balance-form-modal"
        :initial-breakpoint="0.90"
        :breakpoints="[0, 0.90]"
        handle-behavior="cycle"
        ref="modal"
    >
        <ion-content class="ion-padding">
            <h1 class="ion-text-center ion-padding-bottom">Nova Despesa</h1>
            <div class="ion-padding-top ion-padding-bottom">
                <h1>Desenvolver</h1>
            </div>
            <ion-button expand="block" color="success" @click="">
                <ion-icon name="save-outline" class="ion-padding-end"/>
                Salvar
            </ion-button>
        </ion-content>
    </ion-modal>
</template>

<style scoped>

</style>
