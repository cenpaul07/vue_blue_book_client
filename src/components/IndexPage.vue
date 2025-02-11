<template>
  <div>

    <NavBar />

    <!-- Main Content -->
    <div class="main">
      <h1>
        <span class="homeText">Our&nbsp;</span>
        <span class="homeText">Lady's&nbsp;</span>
        <span class="homeText">messages&nbsp;</span>
        <span class="homeText" >of&nbsp;</span>
        <span class="homeText">mercy.</span> <br>
      </h1>

      <h4>
        <span class="homeText">Pray&nbsp;</span>
        <span class="homeText">in&nbsp;</span>
        <span class="homeText">your&nbsp;</span>
        <span class="homeText">mind&nbsp;</span>
        <span class="homeText">and&nbsp;</span>
        <span class="homeText">click&nbsp;</span>
        <span class="homeText">the&nbsp;</span>
        <span class="homeText">button&nbsp;</span>
        <span class="homeText">below&nbsp;</span>
        <span class="homeText">to&nbsp;</span>
        <span class="homeText">read&nbsp;</span>
        <span class="homeText">your&nbsp;</span>
        <span class="homeText">message.</span> <br>
      </h4>

      <div class="read_message_button_div">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Lusitana:wght@400;700&display=swap');

:root   {
  --darkText: rgb(41, 47, 47);
}

body{
  background-image: url(../../public/images/Blue_book-1.png);
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  height: 100dvh;

  text-align: center;
  color: white;
}



.main    {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0px solid red;
  height: 50vh;
  padding: 10% 10%;
}

a   {
  text-decoration: none;
  font-family: 'Instrument Sans';
  font-size: 1em;
  color: #ffffff;
  opacity: 0.7;
}

button {
  padding: 0.7em 1.5em 0.8em 1.5em;

  border: 1px solid white;
  border-radius: 20px;
  background-color: #ffffff00;
  color: white;
  cursor: pointer;

  font-family: 'Instrument Sans', sans-serif;
  font-size: 1em;

  display: flex;
  align-items: center;
  text-align: center;

  opacity: 0;
  filter: blur(4px);
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  transition: 0.6s;

}

button:hover  {
  margin-top: 2px;
  padding: 0.6em 1.5em 0.7em 1.5em;

  background-color: rgba(255, 255, 255, 0.213);

  transition: 0.3s;
  box-shadow: 0px 5px whitesmoke;
}



h1 {
  font-family: 'Instrument Serif', serif;
  max-width: 25ch;
  font-size: 3em;
  line-height: 1.3em;
  font-weight: 400;

  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

h4	{
  opacity: 0.25;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 2.5em;
  margin-top: -0.7em;

  max-width: 600px;

  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span.homeText:nth-child(1) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(2) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(3) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(4) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(5) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

/*---------------------------*/

span.homeText:nth-child(6) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(7) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(8) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(9) {
  animation: fade-in 0.8s 1.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(10) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(11) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(12) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span.homeText:nth-child(13) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

/*---------------------------*/

button:nth-child(1) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

/*---------------------------*/


@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

/*---------------WIDTH---------------*/


@media screen and (max-width: 768px)	{

  nav    {
    padding: 1%;
  }

  h1  {
    margin-left: 0px;
  }

  .main   {
    text-align: center;
  }

  .button	{
    justify-content: center;
    height: 26px;
  }

}

@media screen and (max-width: 440px)	{

  body {
    padding-bottom: 10%;
  }

  .right_nav  {
    display: flex;
    gap: 0.5em;
  }

  .main   {
    display: block;
    padding: 1% 10%;
  }

  .read_message_button_div {
    display: flex;
    justify-content: center;
  }

}

/*---------------HEIGHT---------------*/

@media screen and (max-height: 500px)   {

  body    {
    height: 500px;
  }

}

</style>


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
