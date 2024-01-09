import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import Card from './Card.vue';

/** Card component with title, text and button */
export default {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: {
          type: 'select',
        },
        options: ['small', 'medium', 'large'],
      },
      color: {
        control: 'color',
      },
    },
  };
  
  /** Card example */
  export const Primary = {
    render: (args) => ({
        components: { Card },
        setup() {
          return { args };
        },
        template: '<Card v-bind="args" />',
      }),
    args: {
        title: 'Primary',
        subText: 'Example sub text',
    },
  };

  /** Example of the default card without any parameters (empty, medium sized) */
  export const Empty = {
    render: (args) => ({
        components: { Card },
        setup() {
          return { args };
        },
        template: '<Card v-bind="args" />',
      }),
    args: {},
  };

  /** Example of the card with huge amount of text in title and paragraph */
  export const LongText = {
    render: (args) => ({
        components: { Card },
        setup() {
          return { args };
        },
        template: '<Card v-bind="args" />',
      }),
    args: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
  };

  /** Example of modal opening by click on the button on the card + testing */
  export const WithOpeningModal = {
    render: (args) => ({
        components: { Card },
        setup() {
          return { args };
        },
        template: '<Card v-bind="args" />',
      }),
    args: {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const openButton = canvas.getByRole('button');
      await expect(openButton).toBeInTheDocument();
      await userEvent.click(openButton);
      await expect(openButton).not.toBeInTheDocument();
      await expect(
        canvas.getByTestId('modal')).toBeInTheDocument();
    },
  };