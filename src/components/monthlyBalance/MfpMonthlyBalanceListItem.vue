<script setup lang="ts">
import {IonCol, IonGrid, IonItem, IonLabel, IonRow} from "@ionic/vue";

defineProps(
    {
        expense: {
            type: Object,
            required: true
        }
    }
)
</script>

<template>
    <ion-item>
        <ion-grid>
            <ion-row>
                <ion-col size="1">
                    <ion-label>{{ expense.dueDate }}</ion-label>
                </ion-col>
                <ion-col size="11">
                    <ion-row>
                        <ion-col size="8">
                            <ion-label>{{ expense.description }}</ion-label>
                        </ion-col>
                        <ion-col size="4">
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="6">
                            <ion-label>
                                <p>Restam: {{ expense.installments }}</p>
                            </ion-label>
                        </ion-col>
                        <ion-col size="6">
                            <ion-label>
                                <p>Valor: {{ expense.instalmentValue }}</p>
                            </ion-label>
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<style scoped>

</style>
