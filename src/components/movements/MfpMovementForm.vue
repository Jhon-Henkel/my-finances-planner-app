<script setup lang="ts">
import {IonInput, IonItem, IonList} from "@ionic/vue";
import MfpInputMoney from "@/components/input/MfpInputMoney.vue";
import {ref} from "vue";
import MfpWalletSelect from "@/components/select/MfpWalletSelect.vue";
import MfpTypeMovementSelect from "@/components/select/MfpTypeMovementSelect.vue";

const walletSelected = ref()
const typeSelected = ref()
const value = ref()
const description = ref()
</script>

<template>
    <ion-list>
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
            <mfp-input-money ref="value" @input-money="value = $event"/>
        </ion-item>
        <ion-item>
            <mfp-wallet-select label="Carteira" @select-wallet="walletSelected = $event" />
        </ion-item>
        <ion-item>
            <mfp-type-movement-select label="Tipo" @select-type="typeSelected = $event"/>
        </ion-item>
    </ion-list>
</template>
