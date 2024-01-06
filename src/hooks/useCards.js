import axios from "axios";
import { ref, onMounted, watch } from "vue";
export const isLoadCards = ref(false);

export const useCards = (filters, callback) => {
  const cards = ref([]);

  const cardsFetch = async () => {
    try {
      isLoadCards.value = true;
      const params = {};
      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`;
      }
      if (filters.sortBy) {
        params.sortBy = filters.sortBy;
      }
      const { data } = await axios.get(
        "https://4384da2c13f50563.mokky.dev/products",
        { params }
      );
      cards.value = data;
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      isLoadCards.value = false;
    }
  };

  watch(filters, cardsFetch);

  onMounted(async () => {
    await cardsFetch();
  });

  return { cards };
};
