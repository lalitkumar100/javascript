let obj1= {1:'a',2:'b',3:'c'}
let obj2 ={4:'a',5:'h'}
// let fulloj ={obj1,obj2}
//  op :
//  {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '4': 'a', '5': 'h' }
//   }
//----------------------------------------
let fulloj ={...obj1,...obj2}
// op:
// { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'h' }
//---------------------------------
// let fulloj=Object.assign({},obj1,obj2)
//                 //        ^        ^
//                 //        |        |
//                 //       target    sources
// //op:{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'h' }
console.log(fulloj);

// array of objects and in-built functions

setobj =[
    {
        id:"34d",
        password:"3e3d3"
    },{
 id:"34d",
        password:"3e3d3"
    }

]
console.log(setobj[0]);
// setobj[2].id="rfe23" wrong
setobj[2] ={
    id:"5i3",
    password:"ror,r"
}
console.log(setobj[2]);
console.log(typeof setobj);

console.log(Object.keys(setobj[0]));//wrong if Object.keys(setobj)
console.log(Object.values(setobj[0]));
console.log(Object.entries(setobj[0]));

