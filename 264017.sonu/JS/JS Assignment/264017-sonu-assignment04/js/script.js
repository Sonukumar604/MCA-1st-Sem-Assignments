const studentDetails = [
    { Name: "Aman", RollNumber: 101,  Marks:17 },
    { Name: "Neha", RollNumber: 102,  Marks:18 },
    { Name: "Riya", RollNumber: 103,  Marks:19 },
    { Name: "Neha", RollNumber: 104,  Marks:20 },
];
function Display(){
    let opt3 = "";
let divo = document.getElementById("output")
for (let i in studentDetails) {

    opt3 += `<p> Name: ${ studentDetails[i].Name} </p>
             <p> Roll Number: ${studentDetails[i].RollNumber} </p>
            <p> Marks: ${studentDetails[i].Marks} </p>
    `;
}
divo.innerHTML = opt3;
}
function AddStudent(){
    let opt4 = "";
    let opt5 = "";
    let divo = document.getElementById("output1")
    let name = document.getElementById("name").value;
    let rollNumber = Number(document.getElementById("rollNumber").value);
    let marks = Number(document.getElementById("marks").value);
    if(name != "" && rollNumber != "" && marks != ""){
        let newStudent = { Name: name, RollNumber: rollNumber, Marks: marks };
        studentDetails.push(newStudent);
        //console.log(studentDetails);\
        opt5 = `<p> Name: ${newStudent.Name} </p>
                <p> Roll Number: ${newStudent.RollNumber} </p>
                <p> Marks: ${newStudent.Marks} </p>`;

        divo.innerHTML = opt5;
    }else{
        alert("Please fill all the fields");
    }
}
function FindHighestMarks(){
    let opt6 = "";
    let divo = document.getElementById("output2")
    

}