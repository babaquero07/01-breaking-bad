<script setup lang="ts">
import { ref } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { CharacterQuote } from '@/characters/interfaces/character';

const quotes = ref<CharacterQuote[]>([])

breakingBadApi.get<CharacterQuote[]>('/5')
    .then(({ data }) => {
        console.log(data);
        quotes.value = data;
    })

    // const { data } = await breakingBadApi.get<CharacterQuote[]>('/5');
    // const quotes = ref<CharacterQuote[]>(data)

</script>

<template>
    <ul>
        <li v-for="quote of quotes" :key="quote.author">
            <p>{{ quote.quote }}</p>
            <span>{{ quote.author }}</span>
        </li>
    </ul>
</template>

<style scoped></style>