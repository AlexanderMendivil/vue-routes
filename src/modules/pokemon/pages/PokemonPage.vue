<template>
    <h1>Pokemon Page <span>{{ id }}</span></h1>
    <img :src="pokemon.sprites.front_default" alt="">
</template>

<script>
    export default{
        data(){
            return{
                pokemon: null
            }
        },
        props:{
            id: {
                type: Number,
                required: true
            },
        },
        created(){
            this.getPokemons()
        },
        methods:{
            async getPokemons(){
                try{

                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() )
                    this.pokemon = pokemon
                }catch(e){
                    this.$router.push('/')
                }
            }
        },
        watch:{
            id(){
                this.getPokemons()
            }
        }

        
    }
</script>