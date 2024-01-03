import axios from "axios";

export const useToggleFavorites = () => {
  const toggleFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        item.isFavorite = true;
        const { data } = await axios.post(
          "https://4384da2c13f50563.mokky.dev/favorites",
          {
            product_id: item.id,
          }
        );
        item.favoriteId = data.id;
      } else {
        item.isFavorite = false;
        await axios.delete(
          `https://4384da2c13f50563.mokky.dev/favorites/${item.favoriteId}`
        );
        item.favoriteId = null;
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return { toggleFavorite };
};
