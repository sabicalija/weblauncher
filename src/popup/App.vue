<template>
  <button id="changeColor" @click="onClick" :style="{ backgroundColor: color }"></button>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return {
      color: "gray"
    };
  },
  methods: {
    onClick() {
      const color = this.color;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: 'document.body.style.backgroundColor = "' + color + '";'
        });
      });
    }
  },
  created() {
    const thiz = this;
    chrome.storage.sync.get("color", function(data) {
      thiz.color = data.color;
    });
  }
};
</script>

<style lang="stylus" scoped>
#changeColor
  height 30px
  width 30px
  outline none
</style>
