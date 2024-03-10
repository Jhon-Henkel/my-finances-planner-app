<script setup lang="ts">
import {
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonSearchbar,
    IonItemOption,
    IonItemSliding,
    IonItemOptions,
    IonActionSheet,
    IonAlert
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {ref} from "vue";
import MfpMovementDetailsCard from "@/components/movements/MfpMovementDetailsCard.vue";
import MfpMovementListItem from "@/components/movements/MfpMovementListItem.vue";

const movements = [
    {
        icon: 'arrow-down-circle',
        color: 'danger',
        description: 'Conta de Gas',
        amount: "R$ 1.000.00",
        date: '05/03/24',
        account: 'carteira...'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Vale refeição',
        amount: "R$ 100.00",
        date: '10/03/24',
        account: 'Inter Jhon'
    },
    {
        icon: 'arrow-down-circle',
        color: 'danger',
        description: 'Gasolina',
        amount: "R$ 100.00",
        date: '15/03/24',
        account: 'carteira...'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Salário',
        amount: "R$ 1.000.00",
        date: '10/03/24',
        account: 'carteira...'
    },
    {
        icon: 'arrow-up-circle',
        color: 'success',
        description: 'Salário',
        amount: "R$ 1.000.00",
        date: '10/03/24',
        account: 'carteira...'
    }
]
const isOpen = ref(false)
const actionSheetButtons = [
    {
        text: 'Editar',
        data: {
            action: 'edit',
        },
    },
    {
        text: 'Deletar',
        role: 'destructive',
        data: {
            action: 'delete',
        },
    },
    {
        text: 'Cancelar',
        role: 'cancel',
        data: {
            action: 'cancel',
        },
    },
]
const setOptionsOpen = (state: boolean) => {isOpen.value = state}
const filterInputs = [
    {
        type: "text",
    },
    {
        type: 'text',

    },
]

function optionsAction(event: any) {
    setOptionsOpen(false)
    console.log(JSON.stringify(event.detail?.data?.action, null, 2))
    console.log("desenvolver")
}
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- todo ação de cadastrar (botão +) usar modal do ionic -->
            <ion-list>
                <ion-list-header>
                    <ion-label>Movimentações</ion-label>
                    <ion-button class="ion-no-padding" id="filter">
                        <ion-icon name="filter-circle-outline" color="success" class="top-icon"/>
                    </ion-button>
                    <!-- todo desenvolver campos -->
                    <ion-alert trigger="filter" header="Filtrar" :buttons="['Buscar']" :inputs="filterInputs" />
                    <ion-button class="ion-no-padding ion-margin-end">
                        <ion-icon name="add-circle" color="success" class="top-icon"/>
                    </ion-button>
                </ion-list-header>
                <ion-searchbar :animated="true" placeholder="Buscar por conta ou descrição"/>
                <mfp-movement-details-card>
                    <template #incomes>R$ 2.400,49</template>
                    <template #expenses>R$ 1.120,00</template>
                    <template #balance>- R$ 1.280,49</template>
                </mfp-movement-details-card>
                <ion-item-sliding v-for="movement in movements" class="ion-text-center">
                    <mfp-movement-list-item :movement="movement"/>
                    <ion-item-options side="end">
                        <ion-item-option color="light" @click="setOptionsOpen(true)">
                            <ion-icon slot="top" :icon="ellipsisHorizontal"/>
                            Opções
                        </ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>
            <ion-action-sheet :is-open="isOpen" :buttons="actionSheetButtons" @didDismiss="optionsAction($event)"/>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.top-icon {
    font-size: 1.8em;
}
</style>
