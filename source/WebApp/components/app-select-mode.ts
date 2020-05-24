import Vue from 'vue';

export default Vue.component('app-select-mode', {
    props: {
        value: Boolean
    },

    data() {
        return { release: this.value };
    },

    watch: {
        value() {
            this.release = this.value;
        },

        language() {
            this.$emit('input', this.release);
        }
    },

    template: `
        <app-select v-model="release" class="option-optimizations option">
            <option v-bind:value="false">Debug</option>
            <option v-bind:value="true">Release</option>
        </app-select>
    `
});