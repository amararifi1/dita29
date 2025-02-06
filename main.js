var cars = ['BMW', 'Audi' , 'Mercedes' , 'Porsche']

console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])

cars.push("Opel")

console.log(cars)

cars.pop()

console.log(cars)

cars.unshift("Golf7")

console.log(cars)

cars.shift()

console.log(cars);

cars.splice(0 , 2 , "Vofswagen");

console.log(cars);

var students = ["Filan", "Ilaz"];
var [s1 , s2] = students;

console.log(s1);

console.log(s2);

var Places = ["Gjakove","Prishtine", "Shtime", "Velipoje"];

var [firstPlace, ,secondPlace] = Places

console.log(secondPlace)

var but1 = document.getElementById("darktog")
var body = document.body

but1.addEventListener("click", function(){
    body.classList.toggle("colored")
})

var numbers = [1 , 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
var [first , second , ...otherNumbers] = numbers

console.log(otherNumbers)

