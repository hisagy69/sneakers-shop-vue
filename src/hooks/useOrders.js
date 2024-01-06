import axios from "axios";
import { ref, onMounted } from "vue";
export const isLoadOrders = ref(false);

export const useOrders = (callback) => {
  const orderItems = ref([]);

  const fetchOrders = async () => {
    try {
      isLoadOrders.value = true;
      const { data } = await axios.get(
        "https://4384da2c13f50563.mokky.dev/orders"
      );

      orderItems.value = data.reduce((arr, order) => {
        arr.push(...order.items);
        return arr;
      }, []);

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      isLoadOrders.value = false;
    }
  };

  onMounted(() => {
    fetchOrders();
  });

  return { orderItems };
};
