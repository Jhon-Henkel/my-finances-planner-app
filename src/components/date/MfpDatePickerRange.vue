<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

const defaultDateRange = null

export default {
    name: 'MfpDatePickerRange',
    components: {
        VueDatePicker
    },
    data() {
        return {
            date: ref(defaultDateRange),
            lastDateChanged: null,
        }
    },
    props: {
        autoApply: {
            type: Boolean,
            default: true
        },
        rangeDate: {
            type: Array,
            required: false
        }
    },
    emits: [
        'dateRangeChanged'
    ],
    methods: {
        dateRangeChangedEmit() {
            if (this.date !== this.lastDateChanged) {
                this.lastDateChanged = this.date
                const dateStart = new Date(this.date[0]).toLocaleDateString().split('/').reverse().join('-')
                const dateEnd = new Date(this.date[1]).toLocaleDateString().split('/').reverse().join('-')
                this.$emit('dateRangeChanged', [dateStart, dateEnd])
            }
        }
    },
    watch: {
        rangeDate: {
            handler: function(val) {
                this.date = val
            },
            deep: true
        }
    }
}
</script>

<template>
    <!-- todo estilizar -->
    <!-- todo detectar o tema (dark/light) -->
    <VueDatePicker
        v-model="date"
        range
        :auto-apply="autoApply"
        :clearable="false"
        :enable-time-picker="false"
        locale="pt-BR"
        format="dd/MM/y"
        :dark="true"
        @internal-model-change="dateRangeChangedEmit">
        <template #preset-date-range-button="{ label, value, presetDate }">
            <span
                role="button"
                :tabindex="0"
                @click="presetDate(value)"
                @keyup.enter.prevent="presetDate(value)"
                @keyup.space.prevent="presetDate(value)"
            >
                {{ label }}
            </span>
        </template>
    </VueDatePicker>
</template>

<style scoped>
.dp__theme_dark,
.dp__theme_light {
    --dp-primary-color: var(--ion-color-success) !important;
    --dp-background-color: var(--ion-color-step-150);
    --dp-border-color: var(--ion-color-step-200);
}
</style>
