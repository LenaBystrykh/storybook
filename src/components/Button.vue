<template>
    <button class="button" :style="style">{{ btnText }}</button>
</template>

<script>
export default {
    name: 'Card',
    props: {
        /** Button text */
        btnText: { 
            type: String, 
            default: 'Тык'
        },
        /** Button background color */
        color: { 
            type: String, 
            default: '#5d41fc'
        },
    },
    computed: {
        style() {
            return {
                backgroundColor: this.color
            }
        }
    }
}
</script>

<style scoped>
.button {
    width: 100%;
    max-width: 600px;
    height: 40px;
    border-radius: 16px;
    padding: 6px;
    outline: none;
    border: none;
    color: white;
    font-family: Verdana;
    font-weight: bold;
    cursor: pointer;
}
</style>