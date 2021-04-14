<template>
  <div class="weblauncher-simple-keyboard"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "Keyboard",
  props: {
    input: {
      type: String
    }
  },
  data() {
    return {
      keyboard: null
    };
  },
  methods: {
    onChange(input) {
      this.$emit("input", input);
    },
    onKeyPress(button) {
      this.$emit("keypress", button);
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";
      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  },
  mounted() {
    this.keyboard = new Keyboard("weblauncher-simple-keyboard", {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    });
  }
};
</script>

<style lang="stylus" scoped></style>
