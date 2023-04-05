<script setup lang="ts">
import type { CharacterQuote } from '@/characters/interfaces/character'
import { toRef } from 'vue'

const props = defineProps<{ quote: CharacterQuote }>()
const quote = toRef(props, 'quote')
</script>

<template>
  <div class="quote-card">
    <h3>- {{ quote.quote }}</h3>
    <span>{{ quote.author }}</span>
  </div>
</template>

<style scoped></style>
