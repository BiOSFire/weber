<template>
  <div class="search-bar rounded-5 fs-5 p-2 px-3 w-75">
    <span><i class="bi bi-search btn-top pe-3"></i></span>
    <input type="text" placeholder="Szukaj" class="w-75" />
  </div>
</template>
<style>
.search-bar,
.obs-too-box {
  background: var(--dark-color);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}
</style>
