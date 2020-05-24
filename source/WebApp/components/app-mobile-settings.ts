import Vue from 'vue';
import '../ts/ui/setup/portal-vue';
import type { AppOptions } from '../ts/types/app';
import type { Branch } from '../ts/types/branch';
import extendType from '../ts/helpers/extend-type';

export default Vue.component('app-mobile-settings', {
    props: {
        options: Object as () => AppOptions,
        branch: Object as () => Branch|null,
        branches: Array as () => ReadonlyArray<Branch>
    },
    data: () => extendType({
        modalOpen: false
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
    template: '#app-mobile-settings'
});