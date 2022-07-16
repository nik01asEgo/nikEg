<template>
<div>
<h1>Number {{ $route.params.id }} of 9</h1>
</div>

</template>

<script>
import { tsIndexSignature } from '@babel/types';
import { computed } from '@vue/reactivity'


export default {
    beforeRouteEnter (to, fromR, next) {
        let result;
        result = prompt('Insert Password');
        console.log(result);
        if (result ==1234) {
            next (true)
        } 
        else {
            next (false),
            alert ('Wrong Password')
        }
    }
}

</script>



<style>

</style>