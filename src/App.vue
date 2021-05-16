<template>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
body {
  margin: 0px;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Microsoft JhengHei;
  background: #abc;
}
</style>
