<template>
  <div
    class="nav-top-box d-flex flex-row justify-content-between gap-2 align-items-center mt-2 w-75"
  >
    <div class="search-bar rounded-2 fs-5 p-2">
      <span><i class="bi bi-search btn-top pe-3"></i></span>
      <input type="text" placeholder="Szukaj" />
    </div>
    <div class="d-flex flex-row gap-3">
      <button class="btn-top rounded-2 fs-5 p-2">Polecane</button>
      <button class="btn-top rounded-2 fs-5 p-2">Obserwowani</button>
      <button class="btn-top rounded-2 fs-5 p-2">Popularne</button>
    </div>
    <div class="d-flex flex-row gap-3">
      <button class="btn-top rounded-2 fs-5 p-2">
        <i class="bi bi-bell-fill"></i>
      </button>
      <div><a href="">Profil</a></div>
    </div>
  </div>
</template>
