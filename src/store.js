import Vue from 'vue';

export const store = Vue.observable({
    text:4,
    details: localStorage.getItem('details') || '',
    data: [
        {
          name: 'Frozen Yogurt',
          done:false
        },
        {
          name: 'Ice cream sandwich',
          done:false
        },
        {
          name: 'Eclair',
          done:false
        }
      ],
});

