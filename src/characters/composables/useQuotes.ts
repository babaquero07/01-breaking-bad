import { ref, onMounted } from 'vue'
import axios from 'axios'
import breakingBadApi from '@/api/breakingBadApi'
import type { CharacterQuote } from '../interfaces/character'

const quotes = ref<CharacterQuote[]>([])
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>()

export const useQuotes = () => {
  onMounted(() => {
    loadQuotes()
  })

  const loadQuotes = async () => {
    if (quotes.value.length > 0) return

    isLoading.value = true
    try {
      const { data } = await breakingBadApi.get<CharacterQuote[]>('/5')

      quotes.value = data
    } catch (error) {
      console.log(error)
      hasError.value = true

      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message)
      }

      errorMessage.value = JSON.stringify(error)
    } finally {
      isLoading.value = false
    }
  }

  return { quotes, isLoading, hasError, errorMessage }
}
