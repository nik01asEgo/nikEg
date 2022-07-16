<template>

<h1>Number {{ $route.params.id }}</h1>

<button class="btn" @click="goBackToAbout">back</button>
<br>
<router-link class="btn" active-class= "active" tag= "button" :to= "'/number/' + $route.params.id + '/info'" >Info</router-link>

<router-view></router-view>
</template>

<script>

export default {
    data () {},
    watch: {
        $route (toR, fromR) {
            this.id = toR.params['id']
        }           
    },
 methods: {
     goBackToAbout () {
         this.$router.push('/about')
     }
 },
beforeRouteLeave (to, from, next) {
    if (confirm ('Are you shure?')) {
        next ()
    } else {
        next (false)
    }
}
}  
</script>



<style>
.btn {
  border: 1px solid color rgb(240, 240, 240);
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px;
  background-color: rgb(240, 240, 240);
  text-decoration: none;
  color: rgb(95, 95, 95);
}
.active {
  background-color: rgb(177, 175, 175);
  color: rgb(19, 19, 19);
  border: 1px solid color rgb(177, 175, 175);
}
</style>