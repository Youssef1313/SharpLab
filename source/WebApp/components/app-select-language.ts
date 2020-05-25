import Vue from 'vue';
import { languages, LanguageName } from '../ts/helpers/languages';
import './app-select';

export default Vue.component('app-select-language', {
    props: {
        value: String as () => LanguageName
    },

    data() {
        return {
            language: this.value,
            languages
        };
    },

    watch: {
        value() {
            this.language = this.value;
        },

        language() {
            this.$emit('input', this.language);
        }
    },

    template: `
        <app-select v-model="language" class="option-language option">
            <option v-bind:value="languages.csharp">C#</option>
            <option v-bind:value="languages.vb">Visual Basic</option>
            <option v-bind:value="languages.fsharp">F#</option>
        </app-select>
    `
});