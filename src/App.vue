<template>
  <img :src="logoURL" :alt="logoCaption" width="200" height="200" />
  <h1>{{ title }}</h1>
  <h2>Добавить новую задачу</h2>
  <div>
    <span
      >У вас {{ allTasks }} {{ allTasks > 1 ? "задачи" : "задача" }} в настоящий
      момент</span
    >
    <br />
    <input
      type="text"
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Добавь новую задачу"
    />
    <button @click="addTask" :disabled="newTask.length < 1">Add task</button>
  </div>
  <div v-if="newTask.length > 0">
    <h3>Новая задача</h3>
    <p>{{ newTask }}</p>
  </div>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="task.id"
      @click="finishTask(task)"
      class="list-item"
      :class="{ strikeout: task.finished }"
    >
      {{ index + 1 }}.{{ task.name }}

      <div v-if="task.finished">
        <button @click="deleteTask(task)">удалить задачу</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";

export default {
  data() {
    return {
      title: "My first project",
      newTask: "",
      logoURL:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
      logoCaption: "A photo by Kelly Sikkema on Unsplash showing post-it notes",
      tasks: [
        { id: 1, name: "learn VUE3 JS", finished: false },
        { id: 2, name: "learn VUE3 JS2", finished: true },
        { id: 3, name: "learn VUE3 JS3", finished: false },
        { id: 4, name: "learn VUE3 JS4", finished: false },
      ],
      allTasks: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length < 1) return;
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false,
      });
      this.newTask = "";
    },
    finishTask(task) {
      task.finished = !task.finished;
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index < 0) {
        return;
      }
      this.tasks.splice(index, 1);
      this.tasks = [...this.tasks];
    },
  },
  computed: {
    allTasks() {
      return this.tasks.length;
    },
    latest() {
      return [...this.tasks].reverse();
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  border-radius: 6px;
  background-color: aqua;
}

.list-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.strikeout {
  text-decoration: line-through;
}
</style>