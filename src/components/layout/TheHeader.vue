<template>
  <header
    class="h-24 p-5 flex content-between border-red-50 w-screen text-gray-100"
  >
    <div class="h-full text-6xl w-1/2 text-left myarts">My_Arts</div>
    <div class="w-1/4">
      <p v-if="isDarkMode">Modo Claro</p>
      <p v-else>Modo Escuro</p>
    </div>
    <nav class="w-1/4">
      <ul class="flex justify-center space-x-2 h-full items-stretch">
        <li><base-button link to="/about">Sobre</base-button></li>
        <li><base-button link to="products">Produtos</base-button></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      isDarkMode: "pink",
    };
  },
  methods: {
    toggleMode() {
      this.isDarkMode = "black";
      console.log("works");
    },
  },
});
</script>

<style scoped>
.myarts {
  font-family: "Dancing Script", cursive;
}

header {
  background-color: v-bind(isDarkMode);
}

nav {
    overflow: hidden;
}
</style>

// bg-pink-400
