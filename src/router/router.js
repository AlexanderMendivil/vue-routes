import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', redirect: '/pokemon'},
    
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webPackChunkName: "PokemonLayout"*/'@/modules/pokemon/layout/PokemonLayout.vue'),
        children:[
            { path: 'home', name: 'pokemon-home', component:  ()=>  import(/*webPackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage.vue') },
            { path: 'about', name:'pokemon-about', component:  ()=>  import(/*webPackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage.vue') },
            { 
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component:  ()=>  import(/*webPackChunkName: "PokemonPage"*/'../modules/pokemon/pages/PokemonPage.vue'),
                props: ( route ) => {
                    const id = +route.params.id
                    return isNaN(id) ? {id: 1} : { id }
                }
            },
            {path: '', redirect: {name: 'pokemon-about' }},

        ],
    },

    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/*webPackChunkName: "DragonBallLayout"*/'@/modules/dbz/layout/LayoutDbz.vue'),
        children:[
            { path: 'characters', name: 'characters-dbz', component:  ()=>  import(/*webPackChunkName: "DragonBallCharacters"*/'@/modules/dbz/pages/Characters.vue') },
            { path: 'about', name:'about-dbz', component:  ()=>  import(/*webPackChunkName: "AboutPageDbz"*/'@/modules/dbz/pages/About.vue') },
            {path: '', redirect: {name: 'about-dbz' }},

        ],
    },
    { path: '/:pathMatch(.*)*', component:  ()=>  import(/*webPackChunkName: "NoFoundPage"*/'../modules/shared/pages/NoPageFound.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router