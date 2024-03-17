<script setup lang="ts">
import {
    IonContent,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonSearchbar,
    IonItemSliding,
    IonItem,
    IonIcon,
    IonItemOptions,
    IonItemOption,
    IonActionSheet
} from "@ionic/vue";
import {ellipsisHorizontal} from "ionicons/icons";
import {ref} from "vue";
import MfpCreditCardItems from "@/components/creditCards/MfpCreditCardItems.vue";
import MfpInsertCreditCardModal from "@/components/creditCards/MfpInsertCreditCardModal.vue";

const cards = [
    {
        description: 'Inter',
        closingDate: '05',
        dueDate: '10',
        invoiceValue: "R$ 1.000.00",
        availableLimit: "R$ 1.000.00",
        totalLimit: "R$ 1.000.00",
    },
    {
        description: 'Nubank',
        closingDate: '05',
        dueDate: '10',
        invoiceValue: "R$ 1.000.00",
        availableLimit: "R$ 1.000.00",
        totalLimit: "R$ 1.000.00",
    }
]
const setOptionsOpen = (state: boolean) => {
    isOpen.value = state
}

const actionSheetButtons = [
    {
        text: 'Ver fatura',
        data: {
            action: 'seeInvoice',
        },
    },
    {
        text: 'Nova despesa',
        data: {
            action: 'newExpense',
        },
    },
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

function optionsAction(event: any) {
    // todo desenvolver ações de editar e deletar
    // todo desenvolver ações de editar e deletar
    setOptionsOpen(false)
    console.log(JSON.stringify(event.detail?.data?.action, null, 2))
    console.log("desenvolver")
}

const isOpen = ref(false)
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-list>
                <ion-list-header>
                    <ion-label>Cartões de crédito</ion-label>
                    <mfp-insert-credit-card-modal/>
                </ion-list-header>
            </ion-list>
            <ion-searchbar :animated="true" placeholder="Buscar por cartão"/>
            <ion-list>
                <ion-item-sliding v-for="card in cards" :key="card.description">
                    <ion-item>
                        <mfp-credit-card-items :card="card"/>
                    </ion-item>
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
