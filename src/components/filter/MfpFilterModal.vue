<script lang="ts" setup>
import {
    IonButton,
    IonModal,
    IonContent,
    IonIcon,
    IonItem,
    IonSelect,
    IonSelectOption,
} from '@ionic/vue';
import {ref} from "vue";
import MfpDatePickerRange from "@/components/date/MfpDatePickerRange.vue";

defineProps(
    {
        items: {
            type: Array<{label:string, value: number}>,
            required: true
        }
    }
)

// todo o valor não deve ser fixo
let ItemTypeSelected = ref(4);
//todo o valor padrão deve ser este mês
const dateFilter: any = ref(null)
const emits = defineEmits(['filterChanged'])
const modal = ref();

function filter() {
    // todo deve ser um objeto tipo um DTO
    const filter = {
        movementType: ItemTypeSelected.value,
        date: {
            start: dateFilter.value[0],
            end: dateFilter.value[1]
        }
    }
    emits('filterChanged', filter);
    modal.value.$el.dismiss()
}
</script>

<template>
    <ion-button class="ion-no-padding" id="mfp-filter-modal" expand="block">
        <ion-icon name="filter-circle-outline" color="success" class="top-icon"/>
    </ion-button>
    <ion-modal
        trigger="mfp-filter-modal"
        :initial-breakpoint="0.65"
        :breakpoints="[0, 0.65, 0.85]"
        handle-behavior="cycle"
        ref="modal"
    >
        <ion-content class="ion-padding">
            <h1 class="ion-text-center ion-padding-bottom">Filtro</h1>
            <ion-select
                interface="action-sheet"
                class="ion-select-border ion-padding-start ion-padding-end"
                v-model="ItemTypeSelected"
                label="Tipo"
                label-placement="floating"
            >
                <ion-item v-for="item in items">
                    <ion-select-option :value="item.value">
                        {{ item.label }}
                    </ion-select-option>
                </ion-item>
            </ion-select>
            <mfp-date-picker-range
                :auto-apply="true"
                v-model="dateFilter"
                @date-range-changed="dateFilter = $event"
                class="ion-padding-top ion-padding-bottom"
            />
            <!-- todo centralizar conteúdo verticalmente -->
            <ion-button expand="block" color="success" @click="filter">
                <ion-icon name="filter-outline" class="ion-padding-end"/>
                Filtrar
            </ion-button>
        </ion-content>
    </ion-modal>
</template>

<style scoped>
.top-icon {
    font-size: 1.8em;
}
.ion-select-border {
    border: 1px solid var(--ion-color-step-200);
    background: var(--ion-color-step-150);
    border-radius: 6px;
}
</style>
