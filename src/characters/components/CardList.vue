<script setup lang="ts">
// import { ref } from 'vue'
import breakingBadApi from '@/api/breakingBadApi'
import type { CharacterQuote } from '@/characters/interfaces/character'
// import { useQuotes } from '@/characters/composables/useQuotes'
import { useQuery } from '@tanstack/vue-query'
//! 1- Nomal suspense
// const { data } = await breakingBadApi.get<CharacterQuote[]>('/5');
// const quotes = ref<CharacterQuote[]>(data)

//! 2- Composable functions
// const { isLoading, quotes, hasError, errorMessage } = useQuotes()

const getQuotesSlow = async (): Promise<CharacterQuote[]> => {
  const { data } = await breakingBadApi.get<CharacterQuote[]>('/5')

  return data
}
//! 3 TanStack Query
const { isLoading, isError, data: quotes, error } = useQuery(['quotes'], getQuotesSlow)
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-if="isError">{{ error }}</h1>
  <ul>
    <li v-for="quote of quotes" :key="quote.author">
      <p>{{ quote.quote }}</p>
      <span>{{ quote.author }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
