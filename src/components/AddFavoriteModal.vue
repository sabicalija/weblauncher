<template>
  <div class="add-favorite modal">
    <font-awesome-icon icon="times" class="button" @click="onClose" />
    <form @submit.prevent="onSubmit">
      <div>
        <label for="favorite-label">Name</label>
        <input id="favorite-label" v-model="label" type="text" />
      </div>
      <div>
        <label for="favorite-url">URL</label>
        <input id="favorite-url" v-model="url" type="text" />
      </div>
      <input type="submit" value="Save" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddFavoriteModal",
  data() {
    return {
      label: "",
      url: ""
    };
  },
  methods: {
    onSubmit() {
      const thiz = this;
      if (this.label && this.url) {
        chrome.storage.sync.get("favorites", function({ favorites }) {
          favorites = Array.from(favorites);
          favorites.push({ label: thiz.label, url: thiz.url });
          chrome.storage.sync.set({ favorites }, function() {
            thiz.onClose();
          });
        });
      }
    },
    onClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.modal
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  z-index 1
  background-color white

  form
    display flex
    flex-flow column nowrap
    & *
      padding 0.25rem

  .button
    cursor pointer
</style>
