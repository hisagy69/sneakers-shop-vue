import axios from "axios";

export const useDeleteFavorite = (callback) => {
  const deleteFavorite = async (item) => {
    try {
      if (callback) {
        callback(item);
      }
      await axios.delete(
        `https://4384da2c13f50563.mokky.dev/favorites/${item.favoriteId}`
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  return { deleteFavorite };
};
