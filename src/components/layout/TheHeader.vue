<template>
    <nav class="bg-pink-400 h-24 p-5 flex content-between border-red-50 w-screen text-gray-100">
        <div class="h-full text-6xl w-1/2 text-left myarts">My Arts</div>
        <div @click="toggleMode" class="w-1/4"><p v-if="isDarkMode">Modo Claro</p>
        <p v-else>Modo Escuro</p>
        </div>
        <ul class="flex h-full w-1/4">
            <li><base-button link to="/about">Sobre</base-button></li>
            <li><base-button link to="products">Produtos</base-button></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data() {
        return {
            isDarkMode: false,

        }
    },
    methods: {
        toggleMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    }
})
</script>

<style scoped>
.myarts {
    font-family: 'Dancing Script', cursive;
}
</style>