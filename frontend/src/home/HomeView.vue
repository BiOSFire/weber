<template>
  <div class="d-flex flex-row justify-content-center">
    <left-sidebar-component />
    <div class="content-wrapper d-flex flex-column">
      <header-component />
      <div class="content">Content</div>
    </div>
    <right-sidebar-component />
  </div>
</template>

<script setup lang="ts"></script>
<style>
.content-wrapper {
  width: 38%;
  border: 1px solid var(--dark-color);
}
</style>
