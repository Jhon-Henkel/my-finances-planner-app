<script setup lang="ts">
import {IonItem, IonList} from "@ionic/vue";
import MfpInputMoney from "@/components/input/MfpInputMoney.vue";
import {ref} from "vue";
import MfpWalletSelect from "@/components/select/MfpWalletSelect.vue";

const value = ref();
const originWallet = ref()
const destinationWallet = ref()
</script>

<template>
    <ion-list>
        <ion-item>
            <mfp-input-money v-model="value" @input-money="value = $event"/>
        </ion-item>
        <ion-item>
            <mfp-wallet-select label="Origem" @select-wallet="originWallet = $event" />
        </ion-item>
        <ion-item>
            <mfp-wallet-select label="Destino" @select-wallet="destinationWallet = $event" />
        </ion-item>
    </ion-list>
</template>
