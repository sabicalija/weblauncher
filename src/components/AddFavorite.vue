<template>
  <li>
    <button @click="onClick">Add Favorite</button>
    <AddFavoriteModal v-show="show" @close="onClose" />
  </li>
</template>

<script>
import AddFavoriteModal from "@/components/AddFavoriteModal.vue";
export default {
  name: "AddFavorite",
  components: { AddFavoriteModal },
  data() {
    return {
      show: false
    };
  },
  methods: {
    onClick() {
      this.show = true;
    },
    onClose() {
      this.show = false;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
