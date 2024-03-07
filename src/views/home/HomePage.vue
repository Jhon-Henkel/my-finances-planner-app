<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="top-content">
                <ion-row class="ion-text-center title">
                    <ion-col>
                        <ion-text><strong>Março</strong></ion-text>
                    </ion-col>
                </ion-row>
                <mfp-account-balance class="ion-padding-top">R$ 1.120,00</mfp-account-balance>
                <ion-row class="ion-padding-top ion-row">
                    <mfp-value-top-item color="success">
                        <template #title>Receitas</template>
                        <template #value>R$ 2.400,49</template>
                    </mfp-value-top-item>
                    <mfp-value-top-item color="danger" icon="arrow-down-circle">
                        <template #title>Despesas</template>
                        <template #value>R$ 1.120,00</template>
                    </mfp-value-top-item>
                </ion-row>
            </div>
            <ion-row>
                <ion-col>
                    <mfp-card color="success">
                        <template #title>A receber</template>
                        <template #content>R$ 1.120,00</template>
                    </mfp-card>
                </ion-col>
                <ion-col>
                    <mfp-card color="danger">
                        <template #title>A pagar</template>
                        <template #content>R$ 1.120,00</template>
                    </mfp-card>
                </ion-col>
            </ion-row>
            <mfp-last-movements :last-movements="lastMovements"/>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonContent, IonRow, IonText, IonCol} from '@ionic/vue';
import MfpAccountBalance from "@/components/home/MfpAccountBalance.vue";
import MfpValueTopItem from "@/components/home/MfpValueTopItem.vue";
import MfpCard from "@/components/card/MfpValueCard.vue";
import MfpLastMovements from "@/components/home/MfpLastMovements.vue";

const lastMovements = [
    {
        icon: 'arrow-down-circle',
        color: 'danger',
        description: 'Conta de...',
        amount: "R$ 1.000.00",
        date: '05/03/24'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Vale ref...',
        amount: "R$ 100.00",
        date: '10/03/24'
    },
    {
        icon: 'arrow-down-circle',
        color: 'danger',
        description: 'Gasolina',
        amount: "R$ 100.00",
        date: '15/03/24'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Salário',
        amount: "R$ 1.000.00",
        date: '10/03/24'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Salário',
        amount: "R$ 1.000.00",
        date: '10/03/24'
    }
]
</script>

<style scoped>
.top-content {
    border-radius: 0 0 18px 18px;
    background: #0e1b25;
    height: 22%;
}

.ion-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    padding: 5px;
    font-size: 1.5em;
}
</style>
