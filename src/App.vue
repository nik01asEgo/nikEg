<template>
  <h1> {{ title }}</h1>
<div id="app">
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <router-link tag="li" class="nav-item" exact to="/" active-class="active">
        <a class="nav-link">main</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/about" active-class="active">
        <a class="nav-link">about</a>
      </router-link>
       <router-link tag="li" class="nav-item" to="/number/3" active-class="active">
        <a class="nav-link">number 3</a>
      </router-link> 
      <router-link tag="li" class="nav-item" to="/number/9" active-class="active">
        <a class="nav-link">number 9</a>
      </router-link>
    </ul>
  </div>
</nav>
  <router-view></router-view>
  </div>
</div>


</template>

<script>

export default {
  
  data() {
    return {
      title: 'Project',
      name: 'app'
  } 
 }
}
</script>

<style>
.nav-item {
  border: 1px solid color rgb(240, 240, 240);
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px;
  background-color: rgb(240, 240, 240);
  text-decoration: none;
}
.nav-link {
  color: rgb(95, 95, 95);
  margin: 5px;
  font-size: 20px;
  text-decoration: none;
}
.active {
  background-color: rgb(177, 175, 175);
  color: rgb(19, 19, 19);
  border: 1px solid color rgb(177, 175, 175);
}
</style>
