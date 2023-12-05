let area;
let height;
let width;

height = window.prompt("enter height :");
width = window.prompt("enter width :");

area = getArea(height ,width);

console.log("the area is : ", area);

function getArea(height, width){
    let result = height * width;
    return result
}