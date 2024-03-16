<script setup lang="ts">

import {IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonModal} from "@ionic/vue";
import {ref} from "vue";
import MfpInputMoney from "@/components/input/MfpInputMoney.vue";

const description = ref()
const value = ref()
const modal = ref()

const saveAccount = () => {
    console.log(description.value, value.value)
    modal.value.$el.dismiss()
}
</script>

<template>
    <ion-button class="ion-no-padding ion-margin-end" id="mfp-account-form-modal" fill="clear">
        <ion-icon name="add-circle-outline" color="success" class="top-icon"/>
    </ion-button>
    <ion-modal
        trigger="mfp-account-form-modal"
        :initial-breakpoint="0.90"
        :breakpoints="[0, 0.90]"
        handle-behavior="cycle"
        ref="modal"
    >
        <ion-content class="ion-padding">
            <h1 class="ion-text-center ion-padding-bottom">Cadastrar Conta</h1>
            <ion-list class="ion-padding-bottom">
                <ion-item>
                    <ion-input
                        v-model="description"
                        type="text"
                        fill="solid"
                        label="Descrição"
                        label-placement="floating"
                    />
                </ion-item>
                <ion-item>
                    <mfp-input-money v-model="value" @input-money="value = $event"/>
                </ion-item>
            </ion-list>
            <ion-button class="ion-padding-top" expand="block" color="success" @click="saveAccount">
                <ion-icon name="save-outline" class="ion-padding-end"/>
                Salvar
            </ion-button>
        </ion-content>
    </ion-modal>
</template>

<style scoped>
.top-icon {
    font-size: 1.8em;
}
</style>
