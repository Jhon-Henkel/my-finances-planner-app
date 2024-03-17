<script setup lang="ts">
import {IonCol, IonGrid, IonLabel, IonRow} from "@ionic/vue";
import MfpValueCard from "@/components/card/MfpValueCard.vue";
</script>

<template>
    <mfp-value-card color="light">
        <template #title>
            <ion-label>
                Balanço
            </ion-label>
        </template>
        <template #content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label>
                            <p>Gastos:</p>
                        </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>R$ 1.000,00</p>
                        </ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label>
                            <p>Cartões:</p>
                        </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>R$ 1.000,00</p>
                        </ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label>
                            <p>Ganhos:</p>
                        </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>R$ 1.000,00</p>
                        </ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label>
                            <p>Contas:</p>
                        </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>R$ 1.000,00</p>
                        </ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label>
                            <p>Balanço:</p>
                        </ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>R$ 1.000,00</p>
                        </ion-label>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </template>
    </mfp-value-card>
</template>
