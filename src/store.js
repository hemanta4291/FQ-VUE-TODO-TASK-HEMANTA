import Vue from 'vue';

export const store = Vue.observable({
    text:4,
    details: localStorage.getItem('details') || ''
});

