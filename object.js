
// const mysym=Symbol(#);//wrong
const mysym = Symbol("key1");


const user= {
    name :"hitesh",
    age:2,
    islogged:false,
    // mysym :"%" wrong in typeof  show string not symbol
    [mysym] :"ke1y",//now show symbol,
    email: "res@gmail.com",
    prr:["gr","fg","hh"],
    "pet name":"tom",//due to space it cant create so
  run:function(){
    console.log("hello");
    

    }
}
console.log(user.email);
console.log(user["email"]);
console.log(user["pet name"]);
console.log(user[mysym]);
console.log("type of "+typeof mysym);
console.log("type of "+typeof user[mysym]);
console.log(user);
// Object.freeze(user);//restric change in obj
console.log(user.run());
user.run= function(){
    console.log("bye");
    
}
console.log(user.run());
//outside declearing
user.stop = function(){
    console.log("stop it");
    
}
user.height =5;
console.log(user.stop());
console.log(user.height)







