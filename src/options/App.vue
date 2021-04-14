<template>
  <div>
    <div class="options">
      <button
        v-for="color of colors"
        :key="color"
        :style="{ backgroundColor: color }"
        @click="onClick(color)"
        class="color"
      ></button>
    </div>
    <div>
      <p>
        Choose a different background color!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {
      colors: ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]
    };
  },
  methods: {
    onClick(color) {
      chrome.storage.sync.set({ color }, function() {
        console.log("Color is " + color);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
div.options
  display flex
  flex-flow row nowrap
  button.color
    width 100%
    height 40px
</style>
