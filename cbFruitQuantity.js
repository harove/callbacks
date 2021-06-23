const getFruit = (cb)=>{
    setTimeout(()=>{
        cb('manzanas')
    },2000)
}

const getQuantity = (cb)=>{
    setTimeout(()=>{
        cb(33)
    },2000)
}


function main(){
    counter = 0
    getFruit((fruit)=>{
        getQuantity((quantity)=>{
            console.log(`hay ${quantity} ${fruit}`)
        })
    })
}

main()
