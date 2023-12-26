<template>
  <div class="input-wrapper relative flex">
    <slot></slot>
    <input
      type="text"
      class="border rounded-2xl p-4 pl-11"
      :value="modelValue"
      @input="updateInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: String,
    placeholder: String,
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
