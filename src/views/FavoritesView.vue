<template>
  <main>
    <h1>Web Launcher</h1>
    <h2>Favorites</h2>
    <Favorites />
  </main>
</template>

<script>
import Favorites from "@/components/Favorites.vue";
export default {
  name: "FavoritesView",
  components: { Favorites }
};
</script>

<style lang="stylus" scoped></style>
