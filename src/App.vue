<template>
  <the-header></the-header>
  
  <router-view/>
  <the-footer></the-footer>
</template>

<script lang="ts">
import './assets/tailwind.css';
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
  }

};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway:wght@300&display=swap');

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
