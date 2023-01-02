import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/', component:  ()=>  import(/*webPackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage.vue') },
    { path: '/about', component:  ()=>  import(/*webPackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage.vue') },
    { 
        path: '/:id',
        component:  ()=>  import(/*webPackChunkName: "PokemonPage"*/'../modules/pokemon/pages/PokemonPage.vue'),
        props: ( route ) => {
            const id = +route.params.id
            return isNaN(id) ? {id: 1} : {id: +route.params.id}
        }
    },
    { path: '/:pathMatch(.*)*', component:  ()=>  import(/*webPackChunkName: "NoFoundPage"*/'../modules/shared/pages/NoPageFound.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router