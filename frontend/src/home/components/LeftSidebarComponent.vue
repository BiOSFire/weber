<template>
  <div class="left-sidebar d-flex flex-column mt-2">
    <div class="d-flex flex-row gap-3 align-items-center">
      <button class="btn-top rounded-2 fs-5 p-2">
        <i class="bi bi-bell-fill"></i>
      </button>
      <div><a href="">Profil</a></div>
    </div>
    <div
      class="d-flex align-items-start justify-content-center fw-bold flex-column pe-3 gap-3 mt-4 position-sticky"
    >
      <button
        class="p-2 rounded-2 fs-5"
        :class="{ 'active-button': $route.name === 'home' }"
        @click="$router.push({ name: 'home' })"
      >
        <i
          class="bi bi-house-fill pe-2"
          :class="{ 'active-button': $route.name === 'home' }"
        ></i
        >Strona Główna
      </button>
      <button
        class="p-2 rounded-2 fs-5"
        :class="{ 'active-button': $route.name === 'profil' }"
        @click="$router.push({ name: 'profil' })"
      >
        <i
          class="bi bi-person-fill pe-2"
          :class="{ 'active-button': $route.name === 'profil' }"
        ></i
        >Twój Profil
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-chat-fill pe-2"></i>Wiadomości
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-gear-fill pe-2"></i>Ustawienia
      </button>
      <button class="p-2 rounded-2 fs-5">
        <i class="bi bi-plus-square-fill pe-2"></i>POST
      </button>
    </div>
  </div>
</template>
<style scoped>
.left-sidebar {
  width: 20%;
  height: 300px;
  margin-left: 1%;
}
.active-button {
  background-color: #f0ece5;
  color: #161a30;
}
</style>
