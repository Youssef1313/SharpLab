import Vue from 'vue';
import type { DiagnosticWarning } from '../ts/types/results';
import '../ts/ui/directives/app-class-toggle';
import './app-diagnostic';

export default Vue.component('app-section-warnings', {
    props: {
        warnings: Array as () => ReadonlyArray<DiagnosticWarning>,
        header: {
            type: Boolean,
            default: true
        }
    },
    template: '#app-section-warnings'
});