<template>
  <div>
    <button>
      <font-awesome-icon icon="angle-double-down" @click="onHide" />
    </button>
    <FocusInputs @focus="onFocus" />
  </div>
</template>

<script>
import FocusInputs from "@/components/FocusInputs.vue";
export default {
  name: "Controls",
  components: { FocusInputs },
  methods: {
    onHide() {
      this.$emit("hide");
    },
    onFocus(element) {
      this.$emit("focus", element);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
