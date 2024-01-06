<template>
  <div class="skeleton rounded-3xl border border-slate-100"></div>
</template>

<style scoped>
.skeleton {
  width: 210px;
  min-height: 260px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#f2f2f2, 91px, transparent 0),
    linear-gradient(#f2f2f2, 15px, transparent 0),
    linear-gradient(#f2f2f2, 15px, transparent 0),
    linear-gradient(#f2f2f2, 24px, transparent 0),
    linear-gradient(#f2f2f2, 32px, transparent 0);
  background-size: 150px, 150px, 93px, 80px, 32px;
  background-position: 30px 36px, 30px 143px, 30px 162px, 30px 199px,
    148px 191px;
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
