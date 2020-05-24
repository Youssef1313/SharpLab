import Vue from 'vue';
import { cm6PreviewState, setCM6PreviewEnabled } from './state/cm6-preview';

let id = 1;

export default Vue.component('app-cm6-preview-manager', {
    data: () => ({
        preview: cm6PreviewState,
        // eslint-disable-next-line no-plusplus
        id: id++
    }),
    computed: {
        editorName() {
            return this.preview.enabled ? 'Preview' : 'Default';
        }
    },
    methods: {
        toggle() {
            setCM6PreviewEnabled(!this.preview.enabled);
        }
    },
    template: '#app-cm6-preview-manager'
});