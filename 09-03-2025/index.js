//Task1
// interface Person {
//     Name : string;
//     Age : number;
// }
// let person :Person = {
//     Name : "Ali",
//     Age: 20
// }
// function check() {
// if (person.Age > 18)
//     return "Adult";
// else 
//     return "Minor";
// }
// console.log(check());
//Task2
// interface Teacher {
//     Name : string;
//     Subject: string [];
// }
// let teacher : Teacher = {
//     Name : "Hala",
//     Subject : ["Math", "C++"]
// };
// for (let i =0; i<teacher.Subject.length; i++){
//     console.log(teacher.Subject[i]);
// }
//Task3
// interface Product {
//     Name : string;
//     Price: number;
//     Quantity: number;
// }
// let product : Product[] = [
//     {Name : "Laptop", Price :700 , Quantity: 6 },
//     {Name : "Office chair", Price : 150, Quantity: 3},
//     {Name : "Smartwatch", Price : 200, Quantity:  1},
//     {Name : "Wireless Bluetooth Earbuds", Price : 70, Quantity:  10}
// ];
// function discount() {
// for (const element of product) {
//     if(element.Quantity > 5){
//         let dis= element.Price*0.15;
//         element.Price-= (element.Price*0.15);
//     }
//     console.log(element.Price);
// }
// }
// discount();
//Task4
function SaveData(event) {
    event.preventDefault();
    var Name = document.getElementById("name").value;
    localStorage.setItem("name", Name);
    var Description = document.getElementById("description").value;
    localStorage.setItem("description", Description);
    var Price = document.getElementById("price").value;
    localStorage.setItem("price", Price);
    var Quantity = document.getElementById("quantity").value;
    localStorage.setItem("quantity", Quantity);
    ShowData();
}
function ShowData() {
    var productData = document.getElementById("data");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        productData.innerHTML += "<p><strong>".concat(key, ":</strong> ").concat(value, "</p>");
    }
}
