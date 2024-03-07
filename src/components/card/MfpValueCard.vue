<script setup lang="ts">
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/vue";

defineProps(
    {
        color: {
            type: String,
            default: "primary"
        }
    }
)
</script>

<template>
    <ion-card :color="color" class="ion-text-center">
        <ion-card-header class="header">
            <ion-card-title>
                <slot name="title"/>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content class="value">
            <slot name="content"/>
        </ion-card-content>
    </ion-card>
</template>

<style scoped>
.value {
    font-size: 1.7em;
    padding-top: 0;
    font-weight: bold;
}

.header {
    padding-bottom: 0;
}
</style>
