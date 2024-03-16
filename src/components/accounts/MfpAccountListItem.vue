<script setup lang="ts">
import {IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow} from "@ionic/vue";

defineProps(
    {
        account: {
            type: Object,
            required: true
        }
    }
);
</script>

<template>
    <ion-item>
        <ion-grid>
            <ion-row class="ion-row">
                <ion-col>
                    <ion-row>
                        <ion-col size="8">
                            <ion-label><strong>{{ account.name }}</strong></ion-label>
                        </ion-col>
                        <ion-col size="4">
                            <ion-label>{{ account.amount }}</ion-label>
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<style scoped>
.ion-row {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
