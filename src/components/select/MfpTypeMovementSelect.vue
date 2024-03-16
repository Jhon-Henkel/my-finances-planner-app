<script setup lang="ts">
import {IonItem, IonSelect, IonSelectOption} from "@ionic/vue";

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

const transactionTypeSelectOptions = {
    header: 'Tipo',
    subHeader: 'Selecione o tipo da transação',
};

const movementTypes = [
    {
        value: 1,
        label: 'Receitas'
    },
    {
        value: 2,
        label: 'Despesas'
    },
    {
        value: 3,
        label: 'Transferências'
    }
]

const emits = defineEmits(['selectType'])

function selectType(typeId: number) {
    emits('selectType', typeId);
}
</script>

<template>
    <ion-select
        :label="label"
        :interface-options="transactionTypeSelectOptions"
        :placeholder="placeholder"
        interface="action-sheet"
        @ionChange="selectType($event.detail.value)"
    >
        <ion-item v-for="item in movementTypes">
            <ion-select-option :value="item.value">
                {{ item.label }}
            </ion-select-option>
        </ion-item>
    </ion-select>
</template>
