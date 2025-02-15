<template>
  <nav>
    <a :style="customStyle" href="/">
      <img src="../../public/images/Rose_logo.png" class="site_logo" alt="logo">
    </a>
    <div class="right_nav">
      <a href="/" class="nav_link">Home</a>
      <a href="#" class="nav_link">About</a>
      <a href="#" class="nav_link">Contact us</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props:  {
    customStyle: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style >
nav{
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.site_logo  {
  opacity: 0.8;
  padding: 8px 10px;
  height: 40px;
  width: auto;
  transition-duration: 0.6s;
  filter: invert(1);
}.site_logo:hover   {
   opacity: 1;
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
  color: #ffffff;
  border-bottom: 0px solid rgba(255, 255, 255, 0);
  transition-duration: 0.6s;
}.nav_link:hover    {
   border-bottom: 2px solid white;
   transition-duration: 0.1s;
   margin-bottom: 5px;
 }

</style>