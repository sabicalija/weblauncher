<template>
  <div v-show="this.inputs.length > 0">
    <button :disabled="inputs.length <= 1" @click="onPrevious">Previous</button>
    <button @click="onFocus">Focus</button>
    <button :disabled="inputs.length <= 1" @click="onClear">Clear</button>
    <button @click="onNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "FocusInputs",
  data() {
    return {
      inputs: [],
      index: 0
    };
  },
  created() {
    document.body.addEventListener("click", this.onClicked);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.onClicked);
  },
  beforeMount() {
    this.inputs = Array.from(document.querySelectorAll("input[type='text'], input[type='search']"));
    this.onFocus();
  },
  methods: {
    onPrevious() {
      if (this.index > 0) this.index--;
      this.onFocus();
    },
    onFocus() {
      const input = this.inputs[this.index];
      input.focus();
      this.$emit("focus", input);
    },
    onClear() {
      const input = this.inputs[this.index];
      input.value = "";
    },
    onNext() {
      if (this.index >= this.inputs.length) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.onFocus();
    },
    onClicked(event) {
      if (event.target.nodeName === "INPUT") {
        this.index = this.inputs.findIndex(input => input == target);
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>
