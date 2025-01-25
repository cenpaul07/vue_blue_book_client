<template>
  <div>
    <button @click="fetchEntry">Click Me</button>
    <div v-if="entry">
      <h2>{{ entry.Excerpt }}</h2>
      <h4>{{ entry.Message }}</h4>



      <p v-for="content in entry.Content" :key="content.type">
        <span v-if="content.type === 'text'">{{ content.text }}</span>
        <!-- Handle other content types here -->
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      entry: null,
    };
  },
  methods: {
    async fetchEntry() {
      try {
        const response = await axios.get('http://localhost:1337/api/entries');
        const entries = response.data.data;
        if (entries.length > 0) {
          const randomIndex = Math.floor(Math.random() * entries.length);
          this.entry = entries[randomIndex];
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
