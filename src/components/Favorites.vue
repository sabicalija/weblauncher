<template>
  <ul>
    <Favorite v-for="(favorite, i) of favorites" :key="i" :data="favorite" />
    <AddFavorite />
  </ul>
</template>

<script>
import Favorite from "@/components/Favorite.vue";
import AddFavorite from "@/components/AddFavorite.vue";
export default {
  name: "Favorites",
  components: { Favorite, AddFavorite },
  data() {
    return {
      favorites: []
    };
  },
  created() {
    const thiz = this;
    chrome.storage.sync.get("favorites", function({ favorites }) {
      thiz.favorites = favorites;
    });
    chrome.storage.onChanged.addListener(function(changes) {
      if (changes.favorites) {
        thiz.favorites = changes.favorites.newValue;
      }
    });
  }
};
</script>

<style lang="stylus" scoped></style>
