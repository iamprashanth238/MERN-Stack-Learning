console.log("Hello World");
let sum = function(num){
  return num + num;
}
console.log(sum(10))
const full_name = function(fname, lname){
  return fname+ " " +lname;
}
console.log(full_name("Prashanth", "Kattoju"));

console.log("Arrow Function:")
const names = (full_name) => {
  return full_name;
}

console.log(names("Prashanth"))

const mul =  (x, y) => {
  return x*y;
}

console.log(mul(45, 9))

console.log("this() function:")
const person = {
  names: "Rama",
  greet: function(){
    console.log("Hello "+this.names+" Good morning..!");
  }
}

person.greet();

const log = {
  name: "Sitamaa",
  greets: function(){
    setTimeout(() => {
      console.log(`Hello ${this.name} Good Mrng..!`);
    }, 3000);
  }
}
log.greets();