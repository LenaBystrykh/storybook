<template>
    <div>
        <Modal v-if="isOpened" :title="title" :text="subText" />
        <div v-if="!isOpened" :class="classes">
            <div>
                <h3 class="card__title">{{ title }}</h3>
                <p class="card__text">{{ subText }}</p>
            </div>
            <Button class="card__button" :btnText="btnText" :color="color" @click="isOpened = true" />
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import Modal from './Modal.vue';

export default {
    name: 'Card',
    components: { Button, Modal },
    props: {
        title: String,
        subText: String,
        size: {
            type: String,
            validator(value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            },
        },
        btnText: String,
        color: String
    },
    data() {
        return {
            isOpened: false,
        }
    },
    computed: {
        classes() { 
            return {
                'card': true,
                [`card--${this.size || 'medium'}`]: true,
            }
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px rgba(163, 163, 226, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--small {
        width: 200px;
        height: 100px;
        padding: 10px;
        border-radius: 10px;

        h3 {
            margin: 0;
            font-size: 18px;
        }

        p {
            font-size: 12px;
        }
    }

    &--medium {
        width: 400px;
        height: 200px;
        padding: 20px;
        border-radius: 20px;

        h3 {
            margin: 0;
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }
    }

    &--large {
        width: 600px;
        height: 300px;
        padding: 30px;
        border-radius: 30px;

        h3 {
            margin: 0;
            font-size: 32px;
        }

        p {
            font-size: 20px;
        }
    }

    &__button {
        margin-left: auto;
    }
}
</style>