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
            <span style="animation: fade-in 1.4s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);"
                  v-for="(word, index) in animatedMessage"
                  :key="index">
              {{ word }}&nbsp;
            </span>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Lusitana:wght@400;700&display=swap');

:root   {
  --darkText: rgb(41, 47, 47);
}

body{
  background-image: url(../../public/images/Wall-111.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 100vh;

  text-align: center;
  color: var(--darkText);
}

nav{
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

p   {
  font-family: 'Instrument Sans';
  font-size: 1.1em;
  max-width: 500px;
  line-height: 1.8em;
  color : black;
  opacity: 1;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  filter: blur(0px);
}

.about_content  {
  text-align: left;
  border-radius: 0px;
  background-blend-mode: darken;
  line-height: 26px;
  color: transparent;
  filter: blur(0px);
  opacity: 1;
  display: inline-block;
  transition: color 0.5s ease, filter 0.5s ease, opacity 0.5s ease;
  //background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(0,0,0,0.1) 75%);
  background-size: 200% 200%;
  /*-webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);*/
  -webkit-mask-size: cover;

}
.about_content.visible {
  color: #333;
  filter: blur(0);
  opacity: 1;
  background: none;
  -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%);
  -webkit-mask-size: cover;
}

.site_logo  {
  opacity: 0.8;
  padding: 8px 10px;
  height: 40px;
  width: auto;
  mix-blend-mode: darken;
  border: 0px solid white;
  transition-duration: 0.6s;
}.site_logo:hover   {
   opacity: 1;
   mix-blend-mode: color-burn;
   rotate: 20deg;
   transition-duration: 0.3s;
   transition: all 400ms cubic-bezier(.47,2.2,.41,.8);
 }

.right_nav  {
  margin-top: -8px;
  display: flex;
  gap: 1em;
}

.nav_link   {
  font-family: 'Instrument Serif';
  display: flex;
  align-items: center;
  padding: 0px 10px;
  text-decoration: none;
  font-style: italic;
  font-size: 1.1em;
  letter-spacing: 0.02em;
  mix-blend-mode: multiply;
  color: #000000;
  border: 0px solid rgba(255, 255, 255, 0);
  transition-duration: 0.6s;
}.nav_link:hover    {
   border-bottom: 2px solid var(--darkText);
   transition-duration: 0.1s;
   margin-bottom: 5px;
 }

.main    {
  display: block;
  flex-direction: column;
  text-align: center;

  margin-top: -80px;
  height: 60vh;
  padding: 12% 25%;
  font-family: 'Instrument Sans';
}

a   {
  text-decoration: wavy;
  font-family: 'Instrument Sans';
  font-size: 1em;
  color: #ffffff;
  opacity: 0.7;
}

.button {
  text-decoration: none;
  border: none;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px 12px 20px;
  transition: 0.6s;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 0;
  filter: blur(4px);
  height: 25px;
}

.button:hover  {
  margin-top: 4px;
  background-color: rgba(255, 255, 255, 0.213);
  transition: 0.3s;
  padding-bottom: 13px;
  box-shadow: 0px 5px whitesmoke;
  height: 25px;
}

form    {
  display: block;
  width: 100%;
  text-align: left;
  transform: scale(0.94);
  animation: scale 1.5s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

label   {
  font-family: 'Instrument Serif';
  font-size: 1.2em;
  opacity: 0;
}

textarea    {
  height: 90px;
  width: 99%;
  display: block;
  outline: none;
  border: none;
  padding-top: 10px;
  padding-left: 0px;
  margin-right: 20px;
  font-family: 'Instrument Serif';
  font-style: italic;
  font-size: 1.2em;
  color: #1822af;
  border-bottom: 1.5px solid #969696;
  background-color: #ffffff00;
  transition: 0.6s;
  opacity: 0;
  border-radius: 0px;
  text-indent: 2.1px;
}textarea:focus {
   border-bottom: 1.5px solid var(--darkText);
   outline: none;
   transition: 0.3s;
 }textarea::placeholder  {
    color: #969696;
  }

input[type="text"]:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
  outline: none;
}
input[data-autocompleted] {
  background-color: transparent !important;
}

input[type=text]::placeholder  {
  color: #969696;
}

input[type=text] {
  color: #1822af;
  box-sizing: border-box;
  font-family: 'Instrument Serif';
  font-style: italic;
  font-size: 1.2em;
  width: 100%;
  padding: 10px 3px;
  margin: 0px 0;
  border: none;
  border-bottom: 1.5px solid #969696;
  border-radius: 0px;
  background-color: #ffffff00;
  transition: 0.6s;
  opacity: 0;
  text-indent: 2.1px;

}

input[type=text]:focus:active  {
  background-color: #ffffff00;
  border-bottom: 1.5px solid var(--darkText);
  outline: none;
  transition: 0.3s;
}

input[type=submit]  {
  width: 100%;
  padding: 10px 20px 12px 20px;

  border: 1px solid black;
  border-radius: 17px;
  background-color: #ffffff00;

  color: var(--darkText);
  font-family: 'Instrument Sans';
  font-weight: 400;
  font-size: 1em;

  transition: 0.6s;
  opacity: 0;
}

input[type=submit]:hover {

  background-color: rgba(0, 0, 0, 0.111);
  box-shadow: 0px 5px var(--darkText);
  padding: 8px 20px 10px 20px;
  margin-top: 5px;
  transition: 0.3s;
  cursor: pointer;
}

h1 {
  font-family: 'Instrument Serif', serif;
  width: 100%;
  font-size: 3em;
  font-weight: 400;
  margin-left: -5px;

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

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.button:nth-child(1) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

p:nth-child(1)   {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

label:nth-child(1)   {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

input[type=text]:nth-child(2)   {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

label:nth-child(6)   {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

textarea:nth-child(7)   {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

input[type=submit]:nth-child(10)   {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

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
    padding: 1% 5%;
    margin-top: 0px;
  }

  .about_content  {
    text-align: left;
  }

  form    {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  input[type=text]    {
    width: 100%;
    padding: 5px 0px;
  }

  textarea    {
    width: 100%;
  }

}

@media screen and (max-width: 440px)	{

  /* body 	{
  height: 100%;
} */

  .main   {
    margin-top: 0px;
  }

  .right_nav  {
    display: flex;
    gap: 0.5em;
  }

  h1  {
    margin-left: -1px;
    text-align: left;
  }

  form    {
    margin-top: -20px;
  }

}


/*---------------HEIGHT---------------*/

</style>
