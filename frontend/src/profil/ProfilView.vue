<template>
  <div class="d-flex flex-row justify-content-between">
    <left-sidebar-component />
    <div class="content-wrapper d-flex flex-column">
      <image-component />
      <div class="content">PROFIL DESCRIPTION</div>
      <profil-component />
      <div>Posts</div>
    </div>
    <right-sidebar-component />
  </div>
</template>

<script setup lang="ts"></script>
<style>
.content-wrapper {
  width: 38%;
  margin-left: 5%;
  margin-right: 1%;
}
</style>