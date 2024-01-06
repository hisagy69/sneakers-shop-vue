<template>
  <div class="input-wrapper relative flex w-full lg:w-auto">
    <slot></slot>
    <input
      type="text"
      class="border rounded-2xl p-4 pl-11 w-full"
      @input="updateInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    placeholder: String,
  },
  methods: {
    updateInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
