<template>
    <div class="modal-bg" @click="$emit('close')"/>
    <div class="modal" data-testid="modal">
        <h3 class="title">{{ title }}</h3>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: String,
        text: String,
    },
}
</script>

<style scoped lang="scss">
.modal-bg {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 600px; 
    border-radius: 60px;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px rgba(163, 163, 226, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin: 0;
        font-size: 32px;
    }

    p {
        font-size: 20px;
    }
}
</style>