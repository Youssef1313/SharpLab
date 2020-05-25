import Vue from 'vue';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

jest.setTimeout(3 * 60 * 1000);

export let lastWarnError = null as Error|null;
Vue.config.warnHandler = (msg, _, trace) => {
    lastWarnError = new Error(msg + trace);
    throw lastWarnError;
};