function sum(x, y){
    let res = x + y;
    console.log(`Sum = ${res}`);
}
function sub(x, y){
    if(x>y){
        console.log(`Sub = ${x - y}`);
    }else{
        console.log(`Sub = ${y - x}`);
    }
}
function mul(x,y){
    console.log(`Mul = ${x*y}`);
}

module.exports = {
    sum: sum,
    sub: sub,
    mul: mul
};