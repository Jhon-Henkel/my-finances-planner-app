<script setup lang="ts">
import {IonGrid, IonRow, IonCol, IonProgressBar, IonLabel} from "@ionic/vue";

defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col size="6">
                <ion-label>{{ card.description }}</ion-label>
            </ion-col>
            <ion-col size="3">
                {{card.closingDate}}
            </ion-col>
            <ion-col size="3">
                {{card.dueDate}}
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-progress-bar :value="0.10" color="success" />
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="4" class="item-label-col">
                <ion-label>
                    <p>Fatura:</p>
                </ion-label>
            </ion-col>
            <ion-col size="4" class="item-label-col">
                <ion-label>
                    <p>Limite disponível:</p>
                </ion-label>
            </ion-col>
            <ion-col size="4" class="item-label-col">
                <ion-label>
                    <p>Limite total:</p>
                </ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="4" class="item-value-col">
                <ion-label>
                    <p>{{card.invoiceValue}}</p>
                </ion-label>
            </ion-col>
            <ion-col size="4" class="item-value-col">
                <ion-label>
                    <p>{{card.availableLimit}}</p>
                </ion-label>
            </ion-col>
            <ion-col size="4" class="item-value-col">
                <ion-label>
                    <p>{{card.totalLimit}}</p>
                </ion-label>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style scoped>
.item-value-col {
    padding-top: 0;
}
.item-label-col {
    padding-bottom: 0;
}
</style>
