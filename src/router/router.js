import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', redirect: '/home'},
    { path: '/home', name: 'home', component:  ()=>  import(/*webPackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage.vue') },
    { path: '/about', name:'about', component:  ()=>  import(/*webPackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage.vue') },
    { 
        path: '/pokemonid/:id',
        name: 'pokemon-id',
        component:  ()=>  import(/*webPackChunkName: "PokemonPage"*/'../modules/pokemon/pages/PokemonPage.vue'),
        props: ( route ) => {
            const id = +route.params.id
            return isNaN(id) ? {id: 1} : { id }
        }
    },
    { path: '/:pathMatch(.*)*', component:  ()=>  import(/*webPackChunkName: "NoFoundPage"*/'../modules/shared/pages/NoPageFound.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router