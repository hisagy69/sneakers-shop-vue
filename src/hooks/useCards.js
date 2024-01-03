import axios from "axios";
import { ref, onMounted, watch } from "vue";

export const useCards = (filters, callback) => {
  const cards = ref([]);

  const cardsFetch = async () => {
    try {
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
    }
  };

  watch(filters, cardsFetch);

  onMounted(async () => {
    await cardsFetch();
  });

  return { cards };
};
