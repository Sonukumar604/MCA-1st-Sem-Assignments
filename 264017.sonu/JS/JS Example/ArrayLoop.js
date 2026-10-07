const studentDetails = [
    { id: 101, name: "Sonu", class: "BCA" },
    { id: 102, name: "Ravi", class: "BCA" },
    { id: 103, name: "Priya", class: "BCA" },
    { id: 104, name: "Amit", class: "BCA" },
];
let opt2 = "";
let opt3 = "";
let divo = document.getElementById("arrayLoop")
for (let i in studentDetails) {
    // opt2 += "id:" + studentDetails[i].id + ", name:" + studentDetails[i].name + ", class:" + studentDetails[i].class + "git <br>"
    // console.log(studentDetails[i])
    //opt3 += `id:${studentDetails[i].id}, name:${studentDetails[i].name}, class:${studentDetails[i].class} <br>`

    opt3 += `<h1> ${ studentDetails[i].id} </h1>
             <p> ${studentDetails[i].name} </p>
            <p> ${studentDetails[i].class} </p>
    `;
}
//divo.innerHTML = opt2;
divo.innerHTML = opt3;
// for (let i in studentDetails) {
//     console.log(i)
// }
// for (let i of studentDetails) {
//     console.log(i)
// }