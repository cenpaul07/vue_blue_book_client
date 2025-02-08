<template>
  <div>
    <head>
      <link rel="stylesheet" href="/about.css">
    </head>
    <NavBar />
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="main">
        <h1>
          <span>{{ data.Excerpt }}</span>
        </h1>
        <div class="about_content" id="text">
          <p>
            <span v-for="(word, index) in animatedMessage" :key="index">{{ word }}&nbsp; </span>
          </p>
        </div>
        <div style="height: 50px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar},
  data() {
    return {
      loading: true,
      data: null,
      message: null,
      animatedMessage: [],
    };
  },
  created() {
    this.fetchEntry();
  },
  methods: {
    async fetchEntry() {
      try {
        const response = await axios.get('http://localhost:1337/api/entries');
        const entries = response.data.data;
        if (entries.length > 0) {
          const randomIndex = Math.floor(Math.random() * entries.length);
          this.data = entries[randomIndex];
          this.message = entries[randomIndex].Message;
          this.animateMessage(); // Call animated message
          this.loading = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    animateMessage() {
      const words = this.message.split(' '); // Split the message into words
      let currentWordIndex = 0; // Initial index

      const displayNextWord = () => {
        if (currentWordIndex < words.length) {
          this.animatedMessage.push(words[currentWordIndex]);
          currentWordIndex += 1;
          // Instead of posting the entire array, post the current word
          window.postMessage(words[currentWordIndex - 1], '*');
          setTimeout(displayNextWord, 1); // Continue the animation
        }

      };
      displayNextWord(); // Start the animation
    },
  },
};
</script>

