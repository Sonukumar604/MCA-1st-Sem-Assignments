const studentDetails = [
    { Name: "Sweta", RollNumber: 101,  Marks:60 },
    { Name: "Khushi", RollNumber: 102,  Marks:70 },
    { Name: "Khushpreet", RollNumber: 103,  Marks:38 },
    { Name: "Supriya", RollNumber: 104,  Marks:20 },
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
    let highestStudent = studentDetails[0];
    
    for (let student of studentDetails) {
        if (student.Marks > highestStudent.Marks) {
            highestStudent = student;
        }
    }

    opt6 = `<p><strong>Highest Marks:</strong></p>
                <p>Name: ${highestStudent.Name}</p>
                <p>Roll Number: ${highestStudent.RollNumber}</p>
                <p>Marks: ${highestStudent.Marks}</p>`;
                
    divo.innerHTML = opt6;
}
function FindLowestMarks(){
    let opt7 = "";
    let divo = document.getElementById("output3");
    let lowestStudent = studentDetails[0];

    for (let student of studentDetails) {
        if (student.Marks < lowestStudent.Marks) {
            lowestStudent = student;
        }
    }
    opt7 = `<p><strong>Lowest Marks:</strong></p>
                <p>Name: ${lowestStudent.Name}</p>
                <p>Roll Number: ${lowestStudent.RollNumber}</p>
                <p>Marks: ${lowestStudent.Marks}</p>`;

    divo.innerHTML = opt7;
}
function SearchStudent(){
    let opt8 = "";
    let divo = document.getElementById("output4");
    let searchName = document.getElementById("searchName").value;

    for (let student of studentDetails) {
        if (student.RollNumber == searchName) {
            opt8 = `<p><strong>Student Found:</strong></p>
                    <p>Name: ${student.Name}</p>
                    <p>Roll Number: ${student.RollNumber}</p>
                    <p>Marks: ${student.Marks}</p>`;
            break;
        }
    }

    if (opt8 === "") {
        opt8 = `<p><strong>Student Not Found</strong></p>`;
    }

    divo.innerHTML = opt8;
}
function PassOrFail() {
    let opt9 = "";
    let divo = document.getElementById("output5");
    let rollNumber = document.getElementById("passFailName").value;
    for(let student of studentDetails){
        if(student.RollNumber == rollNumber){
            if(student.Marks >= 10){
                opt9 = `<p><strong>Student is Pass</strong></p>`;
            } else {
                opt9 = `<p><strong>Student is Fail</strong></p>`;
            }
            break;
        }
    }

    if (opt9 === "") {
        opt9 = `<p><strong>Student Not Found</strong></p>`;
    }

    divo.innerHTML = opt9;
}

function AverageMarks() {

    let opt10 = "";
    let divo = document.getElementById("output6");
    