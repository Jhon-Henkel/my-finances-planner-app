<script setup lang="ts">
import {IonButton, IonIcon, IonLabel} from '@ionic/vue';
import router from "@/router";

defineProps(
    {
        icon: {
            type: String,
            required: true
        },
        routeName: {
            type: String,
            required: true
        }
    }
);

const emits = defineEmits(['goToRoute'])

function goToRoute(routeName: string) {
    emits('goToRoute');
    router.push({'name': routeName});
}
</script>

<template>
    <!-- todo centralizar ícone com o texto verticalmente -->
    <ion-button color="success" expand="block" @click="goToRoute(routeName)">
        <ion-icon :name="icon" slot="start"/>
        <ion-label>
            <slot />
        </ion-label>
    </ion-button>
</template>
