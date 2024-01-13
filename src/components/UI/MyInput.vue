<template>
  <div :class="`input-wrapper relative flex w-full lg:w-auto ${$attrs.class}`">
    <slot></slot>
    <input
      type="text"
      class="border rounded-2xl p-4 pl-11 w-full"
      @input="$attrs.onInput"
      :value="$attrs.value"
      :placeholder="$attrs.placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  inheritAttrs: false,
};
</script>
