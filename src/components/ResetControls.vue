<template>
  <button @click="onReset">
    <font-awesome-icon icon="angle-double-up"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "ResetControls",
  methods: {
    onReset() {
      this.$emit("reset");
    }
  }
};
</script>

<style lang="stylus" scoped>
button
  position fixed
  bottom 0
  left 0
  z-index 9999
</style>
