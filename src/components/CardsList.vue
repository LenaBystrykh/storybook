<template>
    <div class="cards">
        <div v-for="card in cards" :key="card.id">
            <Card :title="card.title" :subText="card.subText" :size="card.size" :btnText="card.btnText" :color="card.color" />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'CardsList',
    components: {
        Card
    },
    props: {
        cards: Array,
    },
}
</script>

<style>
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
