
//<---------- exercise 2 --------->
/*
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1]));

*/

//<------------- exercise 1 --


let name = ["Y", "A", "@", "S", "@", "S", "I", "@", "N", "E"]


let checkName = name.filter((el) => {
    return !el.startsWith("@")
}).reduce((acc, current) => {
    return `${acc}${current}`
})


console.log(checkName)