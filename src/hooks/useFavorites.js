import axios from "axios";
import { ref, onMounted } from "vue";

export const isLoadFavorites = ref(false);

export const useFavorites = (callback) => {
  const favorites = ref([]);

  const favoritesFetch = async () => {
    try {
      isLoadFavorites.value = true;
      const { data } = await axios.get(
        "https://4384da2c13f50563.mokky.dev/favorites",
        {
          params: {
            _relations: "products",
          },
        }
      );
      favorites.value = data.map((card) => ({
        ...card.product,
        favoriteId: card.id,
        isFavorite: true,
      }));

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      isLoadFavorites.value = false;
    }
  };

  onMounted(async () => {
    await favoritesFetch();
  });

  return { favorites };
};
