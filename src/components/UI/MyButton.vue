<template>
  <button
    class="transition bg-lime-400 hover:bg-lime-600 disabled:bg-slate-300 text-white py-5 w-full rounded-2xl"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>
