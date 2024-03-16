<script setup lang="ts">
import {IonItem, IonSelect, IonSelectOption} from "@ionic/vue";

const walletsSelectOptions = {
    header: 'Carteira',
    subHeader: 'Selecione a carteira',
};

defineProps(
    {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Selecione'
        },
    }
)

const wallets = [
    {
        id: 1,
        label: 'Carteira',
        amount: 100
    },
    {
        id: 2,
        label: 'Inter Jhon',
        amount: 200
    },
    {
        id: 3,
        label: 'Inter Maria',
        amount: 300
    },
    {
        id: 4,
        label: 'Inter José',
        amount: 400
    },
    {
        id: 1,
        label: 'Carteira',
        amount: 100
    },
    {
        id: 2,
        label: 'Inter Jhon',
        amount: 200
    },
    {
        id: 3,
        label: 'Inter Maria',
        amount: 300
    },
    {
        id: 4,
        label: 'Inter José',
        amount: 400
    }
]
const emits = defineEmits(['selectWallet'])

function selectWallet(walletId: number) {
    emits('selectWallet', walletId);
}

</script>

<template>
    <ion-select
        :label="label"
        :interface-options="walletsSelectOptions"
        :placeholder="placeholder"
        interface="action-sheet"
        @ionChange="selectWallet($event.detail.value)"
    >
        <ion-item v-for="wallet in wallets">
            <ion-select-option :value="wallet.id">
                {{ wallet.label }}
            </ion-select-option>
        </ion-item>
    </ion-select>
</template>
