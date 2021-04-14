<template>
  <div id="weblauncher-content-container">
    <div id="weblauncher-content" :style="{ height }">
      <Controls @hide="onHide" @focus="onFocus" />
      <Keyboard @change="onChange" @keypress="onKeyPress" :input="input" />
    </div>
    <ResetControls v-if="mode === 'hide'" @reset="onReset" />
  </div>
</template>

<script>
import Controls from "@/components/Controls.vue";
import Keyboard from "@/components/Keyboard.vue";
import ResetControls from "@/components/ResetControls.vue";
export default {
  name: "App",
  components: { Controls, Keyboard, ResetControls },
  data() {
    return {
      height: "20vh",
      mode: "show",
      input: "",
      inputControl: null
    };
  },
  methods: {
    onHide() {
      this.height = "0vh";
      this.mode = "hide";
    },
    onReset() {
      this.height = "20vh";
      this.mode = "show";
    },
    onFocus(input) {
      this.inputControl = input;
      console.log("DUMMY", this.inputControl);
    },
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("DUMMY", this.inputControl, this.inputControl.value);
      this.inputControl.value += button;
      console.log("DUMMY", "button", button);
      console.log("DUMMY", "input", this.input);
    }
  }
};
</script>

<style lang="stylus" scoped>
// #weblauncher-content-container
//   all initial
//   & *
//     all unset
#weblauncher-content
  width 100%
  height 20vh
  position fixed
  bottom 0
  left 0
  z-index 9999
  background-color white
  border-top 1px solid #44ffaa
</style>
