<script setup lang="ts">
import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { CharacterQuote } from '@/characters/interfaces/character';
import { useQuotes } from '@/characters/composables/useQuotes';

// const { data } = await breakingBadApi.get<CharacterQuote[]>('/5');
// const quotes = ref<CharacterQuote[]>(data)
const { isLoading, quotes } = useQuotes();

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <ul>
        <li v-for="quote of quotes" :key="quote.author">
            <p>{{ quote.quote }}</p>
            <span>{{ quote.author }}</span>
        </li>
    </ul>
</template>

<style scoped></style>