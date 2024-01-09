import CardsList from './CardsList.vue';

export default {
    title: 'CardsList',
    component: CardsList,
    tags: ['autodocs'],
    // Описывать параметры здесь, если они нужны для всего компонента
    // parameters: {
    //   backgrounds: {
    //     values: [
    //       { name: 'black', value: '#000' },
    //       { name: 'dark', value: '#222' },
    //       { name: 'light', value: '#ddd' },
    //       { name: 'white', value: '#fff' },
    //     ]
    //   }
    // }
  };
  
  export const Primary = {
    render: (args) => ({
        components: { CardsList },
        setup() {
          return { args };
        },
        template: '<CardsList v-bind="args" />',
      }),
    args: {
        cards: [
            { id: 1, title: 'Карточка 1', subText: 'Подпись 1', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 2, title: 'Карточка 2', subText: 'Подпись 2', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 3, title: 'Карточка 3', subText: 'Подпись 3', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 4, title: 'Карточка 4', subText: 'Подпись 4', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 5, title: 'Карточка 5', subText: 'Подпись 5', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 6, title: 'Карточка 6', subText: 'Подпись 6', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
            { id: 7, title: 'Карточка 7', subText: 'Подпись 7', size: 'small', btnText: 'Открыть', color: '#5d41fc' },
        ]
    },
    // Описывать параметры здесь, если они нужны для конкретной стори
    // parameters: {
    //   backgrounds: {
    //     values: [
    //       { name: 'black', value: '#000' },
    //       { name: 'dark', value: '#222' },
    //       { name: 'light', value: '#ddd' },
    //       { name: 'white', value: '#fff' },
    //     ]
    //   }
    // }
  };

  export const Empty = {
    render: (args) => ({
        components: { CardsList },
        setup() {
          return { args };
        },
        template: '<CardsList v-bind="args" />',
      }),
    args: {
        cards: []
    },
  };