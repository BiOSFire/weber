<template>
  <div
    class="header d-flex flex-row gap-3 w-100 justify-content-between align-items-center gap-2 top-0"
  >
    <button class="btn-top fs-5 p-2 pt-3">Polecane</button>
    <button class="btn-top fs-5 p-2 pt-3">Obserwowani</button>
    <button class="btn-top fs-5 p-2 pt-3">Popularne</button>
  </div>
</template>
<style scoped>
.header {
  width: auto;
  border-bottom: 1px solid var(--dark-color);
}
.btn-top:hover {
  background-color: var(--dark-color);
  color: var(--web-color);
}
</style>
