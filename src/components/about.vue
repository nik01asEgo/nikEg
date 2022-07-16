<template>
<div>
<h1>О нас</h1>

<ul>

    <router-link tag="li"
    v-for="number in 9"
    :to="'/number/'+ number"
    :key="number"
    class="nav-item" active-class="active">
    
    <a class="nav-link ">number {{ number }}</a>
    
    </router-link>

    
</ul>
</div>
</template>

<script>
export default {


}
</script>

<style scoped>
.nav-item {
  border: 1px solid color rgb(240, 240, 240);
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px;
  background-color: rgb(240, 240, 240);
  text-decoration: none;
}
.nav-link {
  color: rgb(95, 95, 95);
  margin: 5px;
  font-size: 20px;
  text-decoration: none;
margin-top: 10px;
}
.active {
  background-color: rgb(177, 175, 175);
  color: rgb(19, 19, 19);
  border: 1px solid color rgb(177, 175, 175);}
</style>