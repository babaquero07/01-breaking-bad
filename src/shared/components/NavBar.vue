<script setup lang="ts">

interface Props {
    title?: string;
}

const props = defineProps<Props>()

</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25">
        <span>{{ props.title || 'Algo' }}</span>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}

img,
a {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}
</style>