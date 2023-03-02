//1

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        resolve(10)
    })
}

//2

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(100)
        },2000)
    })
}

//3

function asyncFunc3(year){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(year >=2000){
            resolve("Above 2000")
          } else {
            reject("below 2000")
          }
          
        },2000)
    })
}

//4

function asyncFunc4(time){
    console.log("waiting for " + time + " milliseconds to finish")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("finished")
        },time)
    })
}


//5




async function getResults(){
    let a = await asyncFunc1();
    console.log(a);

    let b = await asyncFunc2();
    console.log(b);

    let c = await asyncFunc3(2001);
    console.log(c);

    let d = await asyncFunc4(3000);
    console.log(d);
}

getResults();




