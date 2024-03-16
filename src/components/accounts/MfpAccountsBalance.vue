<script setup lang="ts">
import {IonCol, IonGrid, IonRow, IonText} from "@ionic/vue";
</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col class="ion-text-center balance-value">
                <slot/>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col class="ion-text-center balance-text">
                <ion-text>Saldo total</ion-text>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style scoped>
.balance-text {
    margin-bottom: 0;
    font-size: 0.9em;
    padding-bottom: 0;
}

.balance-value {
    font-size: 1.7em;
    padding: 0;
    font-weight: bold;
}
</style>
