<template>
  <div>

    <NavBar />

    <!-- Main Content -->
    <div class="main">
      <h1>
        <span>Our</span>
        <span>&nbsp;Lady's</span>
        <span>&nbsp;messages</span>
        <span>&nbsp;of</span>
        <span>&nbsp;mercy.</span> <br>
      </h1>

      <h4>
        <span>&nbsp;Pray</span>
        <span>&nbsp;in</span>
        <span>&nbsp;your</span>
        <span>&nbsp;mind</span>
        <span>&nbsp;and</span>
        <span>&nbsp;click</span>
        <span>&nbsp;the</span>
        <span>&nbsp;button</span>
        <span>&nbsp;below</span>
        <span>&nbsp;to</span>
        <span>&nbsp;read</span>
        <span>&nbsp;your</span>
        <span>&nbsp;message.</span> <br>
      </h4>

      <div>
<!--        <div class="button">-->
<!--          <a @click="fetchEntry" href="#" ">Read your message</a>-->
          <button class="button" @click="fetchEntry">Read your message</button>
<!--        </div>-->
        <div style="height: 60px;"></div>
      </div>
    </div>
  </div>
<!--  <div>-->
<!--    <button @click="fetchEntry">Click Me</button>-->
<!--    <div v-if="entry">-->
<!--      <h2>{{ entry.Excerpt }}</h2>-->
<!--      <h4>{{ entry.Message }}</h4>-->

<!--      <p v-for="content in entry.Content" :key="content.type">-->
<!--        <span v-if="content.type === 'text'">{{ content.text }}</span>-->
<!--        &lt;!&ndash; Handle other content types here &ndash;&gt;-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar},
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
