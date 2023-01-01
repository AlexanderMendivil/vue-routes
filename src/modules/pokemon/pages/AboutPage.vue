<template>
    <h1>About page</h1>

    <hr>
    <!-- <h2>{{ name }}</h2> -->

    <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>

    export default{
        data(){
            return{
                name: 'Alex'
            }
        },

        methods:{
            onChangeName(){
                console.log("Se cambiara el nombre")
                this.name = 'Melisa'
            }
        },  
        beforeCreate(){
            console.log("beforeCreated")
        },
        created(){
            console.log("Created")
            
        },
        beforeMount(){
            console.log("bedoreMount")
            
        },
        mounted(){
            console.log("Mount")
            
        },
        beforeUpdate(){
            console.log("beforeUpdate")
            
        },
        updated(){
            console.log("Update")
            
        },
        activated(){
            console.log("activated")
            
        },
        deactivated(){
            console.log("deactivated")
            
        },
        beforeUnmount(){
            console.log("beforeUnmount")
            
        },
        unmounted(){
            console.log("unmounted")
            
        },
        errorCaptured(){
            console.log("errorCaptured")
            
        },
        renderTracked(){
            console.log("renderTracked")
            
        },
        renderTriggered(){
            console.log("renderTriggered")

        }
        
    }


</script>