<script setup lang="ts">
import {IonCol, IonIcon, IonRow, IonText} from "@ionic/vue";

defineProps(
    {
        color: {
            type: String,
            default: "primary"
        },
        icon: {
            type: String,
            default: "arrow-up-circle"
        }
    }
);
</script>

<template>
    <ion-col>
        <ion-row class="ion-row">
            <ion-col class="ion-text-end">
                <ion-icon :name="icon" :color="color" class="icon"/>
            </ion-col>
            <ion-col>
                <ion-row>
                    <ion-col class="ion-no-padding title-text">
                        <ion-text>
                            <slot name="title"/>
                        </ion-text>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-no-padding">
                        <ion-text :color="color">
                            <slot name="value"/>
                        </ion-text>
                    </ion-col>
                </ion-row>
            </ion-col>
        </ion-row>
    </ion-col>
</template>

<style scoped>
.icon {
    font-size: 2.4em;
}

.ion-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-text {
    font-size: 0.8em;
}
</style>
