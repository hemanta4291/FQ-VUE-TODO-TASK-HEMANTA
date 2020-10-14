import Vue from 'vue';

export const store = Vue.observable({
    text:4,
    details: localStorage.getItem('details') || '',
    data: [
        {
          name: 'Frozen Yogurt',
        },
        {
          name: 'Ice cream sandwich',
        },
        {
          name: 'Eclair'
        }
      ],
});

