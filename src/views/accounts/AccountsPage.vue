<script setup lang="ts">
import {
    IonActionSheet,
    IonContent,
    IonIcon,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonPage,
    IonSearchbar,
    IonText,
    IonCol,
    IonRow,
    IonGrid, IonLabel, IonList, IonListHeader
} from "@ionic/vue";
import MfpAccountsBalance from "@/components/accounts/MfpAccountsBalance.vue";
import {ellipsisHorizontal} from "ionicons/icons";
import {ref} from "vue";
import MfpAccountListItem from "@/components/accounts/MfpAccountListItem.vue";
import MfpNewAccountFormModal from "@/components/accounts/MfpNewAccountFormModal.vue";

const balance = -1200.00;
const isOpen = ref(false)
const accounts = [
    {
        id: 1,
        name: 'Carteira',
        amount: 'R$ 1.000.00'
    },
    {
        id: 2,
        name: 'Inter Jhon',
        amount: 'R$ 11.200.00'
    }
]

const setOptionsOpen = (state: boolean) => {
    isOpen.value = state
}
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

function optionsAction(event: any) {
    // todo desenvolver ações de editar e deletar
    // todo desenvolver ações de editar e deletar
    setOptionsOpen(false)
    console.log(JSON.stringify(event.detail?.data?.action, null, 2))
    console.log("desenvolver")
}
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="top-content" class="top-content">
                <ion-grid>
                    <ion-list-header>
                        <ion-label>Contas</ion-label>
                        <mfp-new-account-form-modal />
                    </ion-list-header>
                    <ion-row id="balance">
                        <ion-col>
                            <mfp-accounts-balance>
                                <ion-text :color="balance < 0 ? 'danger' : ''">
                                    {{ balance }}
                                </ion-text>
                            </mfp-accounts-balance>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <ion-searchbar :animated="true" placeholder="Buscar por conta"/>
            <ion-item-sliding v-for="account in accounts" class="ion-text-center">
                <mfp-account-list-item :account="account"/>
                <ion-item-options side="end">
                    <ion-item-option color="light" @click="setOptionsOpen(true)">
                        <ion-icon slot="top" :icon="ellipsisHorizontal"/>
                        Opções
                    </ion-item-option>
                </ion-item-options>
            </ion-item-sliding>
            <ion-action-sheet :is-open="isOpen" :buttons="actionSheetButtons" @didDismiss="optionsAction($event)"/>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.top-content {
    border-radius: 0 0 18px 18px;
    background: #0e1b25;
    height: 22%;
}
ion-content {
    position: relative;
}
</style>
