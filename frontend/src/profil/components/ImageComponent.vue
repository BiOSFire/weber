<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="profil-background d-flex justify-content-center align-items-center z-0"
    >
      Backgorund
    </div>
    <div class="profil-content m-0 position-relative">
      <div class="profil d-flex flex-column align-items-center z-1">
        <div
          class="profil-image d-flex align-items-center justify-content-center rounded-circle mb-2"
        >
          Profil
        </div>
        <div class="nick">Nick</div>
      </div>
      <div class="followers d-flex flex-row justify-content-between my-3">
        <span class="followers-number mx-2">Followers</span>
        <span class="followers-number mx-2">Following</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profil-background {
  width: 100%;
  height: 200px;
  background-color: #b6bbc4;
}
.profil {
  width: 100%;
  height: 160px;
}
.profil-image {
  width: 125px;
  height: 125px;
  background-color: #f0ece5;
}
.profil-content {
  top: -15%;
}
.followers {
  width: 35%;
  color: #f0ece5;
}
</style>
