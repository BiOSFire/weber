<template>
  <div
    class="header d-flex flex-row gap-3 w-100 justify-content-between align-items-center gap-2 top-0 my-2"
  >
    <button class="btn-top fs-6 p-2">Polubiane</button>
    <button class="btn-top fs-6 p-2">Odpowiedzi</button>
    <button class="btn-top fs-6 p-2">Podane Dalej</button>
    <button class="btn-top fs-6 p-2">Zapisane</button>
  </div>
</template>
  <style scoped>
.header {
  width: auto;
  border-bottom: 2px solid var(--dark-color);
}
.btn-top:hover {
  background-color: var(--dark-color);
  color: var(--web-color);
}
</style>
  