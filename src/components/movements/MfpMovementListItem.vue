<script setup lang="ts">
import {IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow} from "@ionic/vue";

defineProps(
    {
        movement: {
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
                <ion-col size="1">
                    <ion-icon :name="movement.icon" :color="movement.color" class="icon"/>
                </ion-col>
                <ion-col size="11">
                    <ion-row>
                        <ion-col>
                            <ion-label><strong>{{ movement.description }}</strong></ion-label>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="5">
                            <ion-label>{{ movement.amount }}</ion-label>
                        </ion-col>
                        <ion-col size="4">
                            <ion-label>{{ movement.account }}</ion-label>
                        </ion-col>
                        <ion-col size="3">
                            <ion-label>{{ movement.date }}</ion-label>
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

.icon {
    font-size: 2.1em;
}
</style>
