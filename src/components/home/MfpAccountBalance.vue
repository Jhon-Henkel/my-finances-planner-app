<script setup lang="ts">
import {IonCol, IonRow, IonText} from "@ionic/vue";
</script>

<template>
    <div class="root-node">
        <ion-row>
            <ion-col class="ion-text-center balance-text">
                <ion-text>Saldo atual em contas</ion-text>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col class="ion-text-center balance-value">
                <ion-text>
                    <slot/>
                </ion-text>
            </ion-col>
        </ion-row>
    </div>
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
