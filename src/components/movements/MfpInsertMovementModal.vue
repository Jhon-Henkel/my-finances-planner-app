<script setup lang="ts">
import {
    IonButton,
    IonContent,
    IonIcon,
    IonModal,
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from "@ionic/vue";
import {ref} from "vue";
import MfpMovementForm from "@/components/movements/MfpMovementForm.vue";
import MfpTransferForm from "@/components/movements/MfpTransferForm.vue";

//todo o valor padrão deve ser o dia atual ao cadastrar
const emits = defineEmits(['insertMovement', 'insertTransaction'])
const modal = ref();
const insertType = ref('movement')

function changeMovementType(event: any) {
    insertType.value = event.detail.value;
}

</script>

<template>
    <ion-button class="ion-no-padding ion-margin-end" id="mfp-movement-form-modal" expand="block">
        <ion-icon name="add-circle" color="success" class="top-icon"/>
    </ion-button>
    <ion-modal
        trigger="mfp-movement-form-modal"
        :initial-breakpoint="0.90"
        :breakpoints="[0, 0.90]"
        handle-behavior="cycle"
        ref="modal"
    >
        <ion-content class="ion-padding">
            <h1 class="ion-text-center ion-padding-bottom">Nova Movimentação</h1>
            <ion-segment :value="insertType" color="success" @ionChange="changeMovementType">
                <ion-segment-button value="movement">
                    <ion-label>Movimentação</ion-label>
                </ion-segment-button>
                <ion-segment-button value="transfer">
                    <ion-label>Transferência</ion-label>
                </ion-segment-button>
            </ion-segment>
            <div class="ion-padding-top ion-padding-bottom">
                <div  v-if="insertType === 'movement'">
                    <mfp-movement-form />
                </div>
                <div v-else-if="insertType === 'transfer'">
                    <mfp-transfer-form />
                </div>
            </div>
            <!-- todo centralizar conteúdo verticalmente -->
            <ion-button expand="block" color="success" @click="">
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
