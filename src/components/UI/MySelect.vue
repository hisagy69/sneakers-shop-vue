<template>
  <select
    class="w-fit py-2 bx-3 border rounded-2xl outline-none bg-transparent mr-5"
    :value="modelValue"
    @change="changeOptions"
  >
    <option disabled value="">Отсортировать товары</option>
    <option
      :key="sortOption.value"
      v-for="sortOption in sortOptions"
      :value="sortOption.value"
    >
      {{ sortOption.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  props: {
    sortOptions: Array,
    modelValue: String,
  },
};
</script>
