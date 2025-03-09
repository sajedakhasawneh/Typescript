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

interface Product {
    Name :string;
    Discription :string;
    Price : number;
    Quantity: number;
}


function SaveData(event){
    event.preventDefault();
    let Name  : string = (document.getElementById("name") as HTMLInputElement).value;
    localStorage.setItem("name", Name);

    let Description  : any = (document.getElementById("description") as HTMLInputElement).value;
    localStorage.setItem("description", Description);

    let Price  : any = (document.getElementById("price")as HTMLInputElement).value;
    localStorage.setItem("price", Price);

    let Quantity  : any = (document.getElementById("quantity") as HTMLInputElement).value;
    localStorage.setItem("quantity", Quantity);

    ShowData();
}

function ShowData(){
    let productData :any = document.getElementById("data");
    
    for (let i = 0; i < localStorage.length; i++) {
        var key :any = localStorage.key(i);
        var value = localStorage.getItem(key);
        productData.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
}