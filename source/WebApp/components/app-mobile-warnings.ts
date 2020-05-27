import Vue from 'vue';
import type { DiagnosticWarning } from '../ts/types/results';
import extendType from '../ts/helpers/extend-type';
import { uid } from '../ts/ui/helpers/uid';
import '../ts/ui/setup/portal-vue';

export default Vue.component('app-mobile-warnings', {
    props: {
        warnings: Array as () => ReadonlyArray<DiagnosticWarning>
    },
    data: () => extendType({
        modalOpen: false,
        id: uid()
    })<{
        escListener: (e: KeyboardEvent) => void;
    }>(),
    methods: {
        async openModalAsync() {
            this.escListener = e => {
                if (e.key === 'Escape')
                    this.closeModal();
            };
            this.modalOpen = true;
            document.addEventListener('keyup', this.escListener);
        },

        closeModal() {
            this.modalOpen = false;
            document.removeEventListener('keyup', this.escListener);
        }
    },
    template: '#app-mobile-warnings'
});