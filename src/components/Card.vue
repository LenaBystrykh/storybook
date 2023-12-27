<template>
    <div class="card">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ subText }}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        subText: String
    }
}
</script>

<style scoped>
.card {
    width: 400px;
    height: 200px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0px 0px 30px rgba(163, 163, 226, 0.5);
    padding: 5px 20px;
}
</style>