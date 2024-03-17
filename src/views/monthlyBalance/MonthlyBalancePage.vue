<script setup lang="ts">
import {
    IonActionSheet,
    IonContent,
    IonIcon,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonSearchbar
} from "@ionic/vue";
import {ref} from "vue";
import {ellipsisHorizontal} from "ionicons/icons";
import MfpBalanceCard from "@/components/monthlyBalance/MfpBalanceCard.vue";
import MfpMonthlyBalanceListItem from "@/components/monthlyBalance/MfpMonthlyBalanceListItem.vue";
import MfpInsertMonthlyExpenseForm from "@/components/monthlyBalance/MfpInsertMonthlyExpenseForm.vue";

const isOpen = ref(false)
const actionSheetButtons = [
    {
        text: 'Detalhes',
        data: {
            action: 'expenseDetails',
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

const setOptionsOpen = (state: boolean) => {
    isOpen.value = state
}

const monthlyBalances = [
    {
        month: 'Janeiro',
        expenses: [
            {
                description: 'Chá de bebê',
                dueDate: '10',
                installments: 1,
                instalmentValue: "R$ 1.000.00",
                totalValue: "R$ 2.000.00",
                thisMonthPaid: false,
                account: 'InterJhon',
            },
            {
                description: 'Chá de bebê',
                dueDate: '10',
                installments: 1,
                instalmentValue: "R$ 1.000.00",
                totalValue: "R$ 2.000.00",
                thisMonthPaid: false,
                account: 'InterJhon',
            },
            {
                description: 'Chá de bebê',
                dueDate: '10',
                installments: 1,
                instalmentValue: "R$ 1.000.00",
                totalValue: "R$ 2.000.00",
                thisMonthPaid: false,
                account: 'InterJhon',
            },
        ],
        totalExpensesAmount: 'R$ 3.000.00',
        creditCards: {
            invoices: 'R$ 1.000.00',
        },
        futureProfits: {
            amount: 'R$ 1.000.00',
        },
        accountBalance: {
            amount: 'R$ 1.000.00',
        },
        balance: 'R$ 1.000.00',
    }
]
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-list>
                <ion-list-header>
                    <ion-label>Balanço Mensal</ion-label>
                    <mfp-insert-monthly-expense-form />
                </ion-list-header>
            </ion-list>
            <ion-list>
                <div class="ion-text-center"> < [SCROLL MÊS DESENVOLVER] ></div>
                <!-- todo talvez isso tenha que ser um accordion -->
                <mfp-balance-card />
                <ion-searchbar :animated="true" placeholder="Buscar por descrição, conta"/>
                <ion-item-sliding v-for="expense in monthlyBalances[0].expenses">
                    <mfp-monthly-balance-list-item :expense="expense" />
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

</style>
