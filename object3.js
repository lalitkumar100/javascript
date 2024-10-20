// rename or restruture or destructure  obj1
course ={
    price:"12344",
    name:"jaca",
    couserinstructor:"kitesh"
}
// couserinstructor is big name to small
const {couserinstructor :teacher}=course;
console.log(teacher);//op:kitesh
console.log(course.couserinstructor);//op:kitesh
