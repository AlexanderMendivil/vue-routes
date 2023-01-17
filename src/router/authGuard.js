const isAuthenthicatedGuard = async ( to, from, next ) =>{
    return new Promise(() => {
        const random = Math.random() * 100

        if(random > 50){
            console.log('auth')
            next()
        }else{
            console.log('no auth')
            next({name: 'pokemon-home'})

        }
    })
}

export default isAuthenthicatedGuard