<template>
  <li>
    <span>{{ data.label }}</span>
    <span>{{ data.url }}</span>
  </li>
</template>

<script>
export default {
  name: "Favorite",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped></style>
