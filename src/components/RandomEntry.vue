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
        <button @click="openMessage">Read your message</button>
        <div style="height: 60px;"></div>
      </div>
    </div>
  </div>

</template>

<script>
import NavBar from "@/components/NavBar.vue";


export default {
  components: { NavBar },
  methods: {
    openMessage() {
      this.$router.push({ name: 'MessageDisplay' });
    },
  },
};
</script>

<!--<script>-->
<!--import axios from 'axios';-->
<!--import NavBar from "@/components/NavBar.vue";-->

<!--export default {-->
<!--  components: { NavBar },-->
<!--  data() {-->
<!--    return {-->
<!--      entry: null,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async fetchEntry() {-->
<!--      try {-->
<!--        const response = await axios.get('http://localhost:1337/api/entries');-->
<!--        const entries = response.data.data;-->
<!--        if (entries.length > 0) {-->
<!--          const randomIndex = Math.floor(Math.random() * entries.length);-->
<!--          const randomEntry = entries[randomIndex]; // no need to extract 'data' again-->
<!--          const randomId = randomEntry.documentId;-->
<!--          const idString = JSON.stringify(randomId);-->
<!--          this.$router.push({ path: '/message', query: { entry: idString } });-->
<!--        }-->
<!--      } catch (error) {-->
<!--        console.error(error);-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
