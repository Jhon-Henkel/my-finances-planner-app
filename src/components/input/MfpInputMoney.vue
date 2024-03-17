<script setup lang="ts">
import {IonInput} from "@ionic/vue"
import { ref } from "vue"
import { unformat } from "@/directives/mask/money/util.js"

const value = ref();
const emits = defineEmits(['input-money'])
const inputOptions = {prefix: '', suffix: '', thousands: '.', decimal: ',', precision: 2}

defineProps(
    {
        label: {
            type: String,
            default: 'Valor (R$)',
            required: false
        }
    }
)

function changeValue(event: any) {
    emits('input-money', unformat(event.target.value, inputOptions.precision))
}
</script>

<template>
    <ion-input
        ref="value"
        type="text"
        fill="solid"
        :label="label"
        label-placement="floating"
        @change="changeValue"
        v-money="inputOptions"
    />
</template>
