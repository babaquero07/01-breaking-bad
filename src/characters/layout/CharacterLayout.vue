<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { characterRoute } from '../router';
import type { routeLinks } from '@/router/link-routes';

const routeLinks: routeLinks[] = characterRoute.children!
    .filter((route) => (route.props as { visible: boolean }).visible)
    .map((route) => ({
        name: route.name as string,
        path: route.path,
        title: (route.props as { title: string, visible: boolean }).title,
    }))
</script>

<template>
    <h1>Characters</h1>

    <NavBar :show-icon="false" :links="routeLinks" />

    <RouterView />
</template>

<style scoped></style>