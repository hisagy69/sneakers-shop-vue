<template>
  <div :class="`input-wrapper relative flex w-full lg:w-auto ${$attrs.class}`">
    <slot></slot>
    <input
      type="text"
      class="border rounded-2xl p-4 pl-11 w-full"
      @input="onChangeInput"
      :value="modelValue"
      :placeholder="$attrs.placeholder"
    />
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "my-input",
  inheritAttrs: false,
  props: {
    modelValue: String,
  },
  methods: {
    onChangeInput: debounce(function (e) {
      this.$emit("update:modelValue", e.target.value);
    }, 500),
  },
};
</script>
