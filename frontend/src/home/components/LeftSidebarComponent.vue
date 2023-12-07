<template>
  <div class="left-sidebar d-flex flex-column me-4 mt-2">
    <div class="d-flex flex-row gap-3">
      <button class="btn-top rounded-2 fs-5 p-2">
        <i class="bi bi-bell-fill"></i>
      </button>
      <div><a href="">Profil</a></div>
    </div>
    <div
      class="d-flex align-items-start justify-content-center fw-bold flex-column pe-3 gap-3 mt-4 position-sticky"
    >
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-house-fill pe-2"></i>Strona Główna
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-person-fill pe-2"></i>Twój Profil
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-chat-fill pe-2"></i>Wiadomości
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-gear-fill pe-2"></i>Ustawienia
      </button>
    </div>
  </div>
</template>
<style scoped>
.left-sidebar {
  width: 20%;
  height: 300px;
}
</style>
