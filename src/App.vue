<template>
  <h1>{{ title }}</h1>
<ul>
  <li v-for="task in tasks" :key="task.id">

  </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      title: "My first project",
      tasks: [
        { id: 1, name: "learn VUE3 JS", finished: false },
        { id: 2, name: "learn VUE3 JS2", finished: false },
        { id: 3, name: "learn VUE3 JS3", finished: false },
        { id: 4, name: "learn VUE3 JS4", finished: false },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
