<template>
  <div class="message-display">
    <h2>{{ entry.Excerpt }}</h2>
    <p>{{ entry.Message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.message-display {
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
</style>
