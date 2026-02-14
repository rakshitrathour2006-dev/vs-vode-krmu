function first(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try{
                console.log('first')
                resolve("first completed")
            }catch(error){
                reject('error in first')
            }
            
        }, 4000);
    })
}
function second(){
    return new promise((resolve,reject)=>{
        setTimeout(() => {
            try{
                console.log("second")
                resolve('second completed')
            }catch(error){
                reject('error in second')
            }

        }, 2000);
        
    })
}

function third(){
    setTimeout(() => {
        console.log("third")
    }, 1000);
}

first().then((data)=> {
    return second()
    }).then((data)=>{
    third()
    })
// console.log(first())


// first(()=>{
//    second(()=>{
//     third()
//    }) 
// })
