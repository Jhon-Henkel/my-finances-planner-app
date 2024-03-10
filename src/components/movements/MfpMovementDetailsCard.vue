<script setup lang="ts">
import MfpValueCard from "@/components/card/MfpValueCard.vue";
import {IonCol, IonGrid, IonIcon, IonLabel, IonRow} from "@ionic/vue";
</script>

<template>
    <mfp-value-card color="light">
        <template #title>
            <ion-grid class="ion-no-padding">
                <ion-row>
                    <ion-col size="4">
                        <ion-label>
                            <ion-icon name="arrow-up-circle" color="success"/>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4">
                        <ion-label>
                            <ion-icon name="arrow-down-circle" color="danger"/>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4">
                        <ion-label>
                            <ion-icon name="arrow-up-circle" color="success"/>
                        </ion-label>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </template>
        <template #content>
            <ion-grid class="ion-no-padding">
                <ion-row>
                    <ion-col size="4" class="balance-value">
                        <ion-label>
                            <slot name="incomes"/>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4" class="balance-value">
                        <ion-label>
                            <slot name="expenses"/>
                        </ion-label>
                    </ion-col>
                    <ion-col size="4" class="balance-value">
                        <ion-label color="danger">
                            <slot name="balance"/>
                        </ion-label>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </template>
    </mfp-value-card>
</template>

<style scoped>
.balance-value {
    font-size: 0.6em;
}
</style>
