import Vue from 'vue';
import type { AppOptions } from '../ts/types/app';
import type { Branch } from '../ts/types/branch';
import type { Gist } from '../ts/types/gist';
import extendType from '../ts/helpers/extend-type';
import { uid } from '../ts/ui/helpers/uid';
import '../ts/ui/setup/portal-vue';
import './app-select-language';
import './app-select-branch';
import './app-section-branch-details';
import './app-select-target';
import './app-select-mode';
import './app-cm6-preview-manager';

export default Vue.component('app-mobile-settings', {
    props: {
        options: Object as () => AppOptions,
        branches: Array as () => ReadonlyArray<Branch>
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
    template: '#app-mobile-settings'
});