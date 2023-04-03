<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import type { CharacterQuote } from '@/characters/interfaces/character';

breakingBadApi.get<CharacterQuote[]>('/5')
    .then(({ data }) => {
        console.log(data);
    })

</script>

<template>
    <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
    </ul>
</template>

<style scoped></style>