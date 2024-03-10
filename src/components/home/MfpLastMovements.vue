<script setup lang="ts">
import {IonIcon, IonLabel, IonList, IonListHeader, IonItem, IonButton} from "@ionic/vue";
import router from "@/router";

defineProps(
    {
        lastMovements: {
            type: Array<object>,
            required: true
        }
    }
)
</script>

<template>
    <ion-list>
        <ion-list-header>
            <ion-label>Últimas Movimentações</ion-label>
            <ion-button color="success" @click="router.push({name: 'Movements'})">Ver todos</ion-button>
        </ion-list-header>
        <ion-item v-for="lastMovement in lastMovements" class="ion-text-center">
            <ion-label>
                <ion-icon :name="lastMovement.icon" :color="lastMovement.color"/>
            </ion-label>
            <ion-label>{{ lastMovement.amount }}</ion-label>
            <ion-label>{{ lastMovement.description }}</ion-label>
            <ion-label>{{ lastMovement.date }}</ion-label>
        </ion-item>
    </ion-list>
</template>
