<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";

// // Con interfaces/clases
interface Props {
    title: string;
    links: RouterLink[];
}
const props = defineProps<Props>();
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" width="25" height="25" />
        <span>{{ props.title || '' }}</span>

        <router-link v-for="route in links" :key="route.name" :to="route.path">{{ route.title }}</router-link>
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