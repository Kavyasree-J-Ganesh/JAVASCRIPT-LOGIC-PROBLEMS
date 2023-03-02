var a = 10;
let b = 5;
const c = 2;

console.log(a);
console.log(b);
console.log(c);

//c =3;   => this is not allowed bcz its declared as const
if ( a > b){
    let d = 20;
    var e = 15;
    console.log(d);
}
console.log(e);
//console.log(d);    => it shows error bcz d is defined inside if block and let is a block scoped variable



function example(){
    let p = 1;
    var q = 2;
    const r = 3;

    if(p < q){
        let j = 12;
        var k = 11;
        const l = 13;
    }
   // console.log(j);
    console.log(k);
    //console.log(l);    throws error as js is a block level variable
}
example();
