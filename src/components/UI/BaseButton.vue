<template>
  <button v-if="button">
    <slot></slot>
  </button>
  <router-link v-if="link" :to="to">
    <slot></slot>
  </router-link>
  <a v-if="outlink" :href="receivedlink" target="_blank" class="flex-col">
    <slot></slot>
  </a>
</template>

<script lang="ts">
export default {
   props: {
    link: {
        type: Boolean,
        required: false,
        default: false
    },
    button: {
        type: Boolean,
        required: false,
        default: false
    },
    outlink: {
        type: Boolean,
        required: false,
        default: false
    },
    to: {
        type: String,
        required: false,
        default: "/"
    },
    receivedlink: {
        type: String,
        required: false
    }
   }
}
</script>

<style scoped>
a,
button {
  text-decoration: none;
  font: inherit;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 3rem;
  width: 6rem;
  transition: all 0.3s ease-in;
  background-color: rgb(238, 236, 236);
  color: rgb(214, 16, 165);
}

a:hover,
button:hover {
  background-color: rgb(143, 18, 112);
  border-color: #ddd;
  color: #eee;
}
</style>