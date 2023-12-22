<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="profil-background d-flex justify-content-center align-items-center z-0 rounded-bottom-3"
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
      <div class="followers d-flex flex-row justify-content-between my-2">
        <span class="followers-number mx-2">Followers</span>
        <span class="followers-number mx-2">Following</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profil-background {
  width: 100%;
  height: 150px;
  background-color: #b6bbc4;
}
.profil {
  width: 100%;
}
.profil-image {
  width: 125px;
  height: 125px;
  background-color: #f0ece5;
  border: 2px solid #31304d;
}
.profil-content {
  top: -22%;
  height: 140px;
}
.followers {
  width: 35%;
  color: #f0ece5;
}
.nick {
  color: #f0ece5;
}
</style>
