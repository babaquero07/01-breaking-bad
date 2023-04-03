<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";

// // Con interfaces/clases
interface Props {
    title: string;
    links?: RouterLink[];
    showIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    showIcon: true,
    links: () => [],
});
</script>

<template>
    <nav>
        <img v-if="props.showIcon" src="@/assets/logo.svg" alt="Vue Logo" width="25" height="25" />
        <span v-if="props.title">{{ props.title }} </span>

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