const getFruit = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Juan")
        },2000)
  
    })
}

const getAge = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("33")
        },2000)
  
    })
}


function main() {
  const p1 = getFruit()
}


main()