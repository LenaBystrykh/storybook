import Button from './Button.vue';

/** Button component with customizable text and bg color*/
export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      color: {
        control: 'color',
      },
    },
  };
  
  export const Primary = {
    render: (args) => ({
        components: { Button },
        setup() {
          return { args };
        },
        template: '<Button v-bind="args" />',
      }),
    args: {
        btnText: 'Тык',
        color: '#5d41fc',
    },
  };

  export const Empty = {
    render: (args) => ({
        components: { Button },
        setup() {
          return { args };
        },
        template: '<Button v-bind="args" />',
      }),
    args: {
        btnText: '',
        color: '',
    },
  };

  export const LongText = {
    render: (args) => ({
        components: { Button },
        setup() {
          return { args };
        },
        template: '<Button v-bind="args" />',
      }),
    args: {
        btnText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        color: '#5d41fc'
    },
  };

  export const Black = {
    render: (args) => ({
        components: { Button },
        setup() {
          return { args };
        },
        template: '<Button v-bind="args" />',
      }),
    args: {
        btnText: 'Тык',
        color: '#000'
    },
  };