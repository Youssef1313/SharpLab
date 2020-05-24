import Vue from 'vue';
import { targets, TargetName } from '../ts/helpers/targets';

export default Vue.component('app-select-target', {
    props: {
        value: String as () => TargetName
    },

    data() {
        return {
            target: this.value,
            targets
        };
    },

    watch: {
        value() {
            this.target = this.value;
        },

        language() {
            this.$emit('input', this.target);
        }
    },

    template: '#app-select-target'
});