<template>

    <div>
        <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params:{id: 85} }">Pokemon id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->
        <custom-link v-for="link in links" :key="link.to" :link="link"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    
    data(){
        return{
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'por ID', id: 150},
                {to: 'pokemon-about', name: 'about'},

                {to: 'characters-dbz', name: 'characters'},
                {to: 'about-dbz', name: 'about'},

                {to: 'https://www.google.com', name: 'Google'},
            ]
        }
    },
    components:{
        CustomLink: defineAsyncComponent(()=> import('./CustomLink.vue') )

    }
}
</script>
<style scoped>
    div {
        padding: 0 30px;
    }
    div a{
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    a.router-link-exact-active{
        color: #42b983;
    }
</style>