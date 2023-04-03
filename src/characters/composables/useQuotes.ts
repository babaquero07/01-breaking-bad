import { ref } from "vue";
import breakingBadApi from "@/api/breakingBadApi";
import type { CharacterQuote } from "../interfaces/character";

export const useQuotes = () => {
    const quotes = ref<CharacterQuote[]>([]);
    const isLoading = ref<boolean>(true);

    breakingBadApi.get<CharacterQuote[]>('/5')
        .then(({ data }) => {
            console.log(data);
            quotes.value = data;
            isLoading.value = false;
        })

  return { quotes, isLoading }
}