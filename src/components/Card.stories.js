import Card from './Card.vue';

export default {
    title: 'Card',
    component: Card,
  };
  
  export const FirstStory = {
    render: (args) => ({
        components: { Card },
        setup() {
          return { args };
        },
        template: '<Card v-bind="args" />',
      }),
    args: {
        title: 'Primary',
        subText: 'Example sub text'
    },
  };