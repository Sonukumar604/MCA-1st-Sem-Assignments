const studentDetails = [
    { Name: "Sweta", RollNumber: 101, Marks: 60 },
    { Name: "Khushi", RollNumber: 102, Marks: 70 },
    { Name: "Khushpreet", RollNumber: 103, Marks: 38 },
    { Name: "Supriya", RollNumber: 104, Marks: 20 },
];

function renderStudent(student) {
    return `<p>Name: ${student.Name}</p>
            <p>Roll Number: ${student.RollNumber}</p>
            <p>Marks: ${student.Marks}</p>`;
}

function showstudent() {
    let output = "";
    for (const student of studentDetails) {
        output += renderStudent(student);
    }
    document.getElementById("result1").innerHTML = output;
}

function addstudent() {
    const nameInput = document.getElementById("studentname");
    const rollInput = document.getElementById("rollno");
    const marksInput = document.getElementById("marks");
    const name = nameInput.value.trim();
    const rollNumber = Number(rollInput.value);
    const marks = Number(marksInput.value);

    if (!name || !rollInput.value || !marksInput.value) {
        document.getElementById("add-student").textContent = "Please fill in all fields.";
        return;
    }
    let duplicateRollNumber = false;
    for (const student of studentDetails) {
        if (student.RollNumber === rollNumber) {
            duplicateRollNumber = true;
            break;
        } else {
            continue;
        }
    }
    if (duplicateRollNumber) {
        document.getElementById("add-student").textContent = "That roll number already exists.";
        return;
    }
    if (marks < 0 || marks > 100) {
        document.getElementById("add-student").textContent = "Marks must be between 0 and 100.";
        return;
    }

    const newStudent = { Name: name, RollNumber: rollNumber, Marks: marks };
    studentDetails.push(newStudent);
    document.getElementById("add-student").innerHTML = renderStudent(newStudent);
    nameInput.value = "";
    rollInput.value = "";
    marksInput.value = "";
}

function findhighestmarks() {
    let student = studentDetails[0];
    for (const current of studentDetails) {
        if (current.Marks > student.Marks) {
            student = current;
        } else {
            continue;
        }
    }
    document.getElementById("hmarks").innerHTML = renderStudent(student);
}

function findlowestmarks() {
    let student = studentDetails[0];
    for (const current of studentDetails) {
        if (current.Marks < student.Marks) {
            student = current;
        } else {
            continue;
        }
    }
    document.getElementById("low-marks").innerHTML = renderStudent(student);
}

function searchstudent() {
    const rollNumber = Number(document.getElementById("seastd").value.trim());
    let output = "Student not found.";
    for (const student of studentDetails) {
        if (student.RollNumber === rollNumber) {
            output = renderStudent(student);
            break;
        } else {
            continue;
        }
    }
    document.getElementById("see-std").innerHTML = output;
}

function result() {
    let output = "";
    for (const student of studentDetails) {
        if (student.Marks >= 40) {
            output += `<p>${student.Name} (${student.RollNumber}): Pass</p>`;
        } else {
            output += `<p>${student.Name} (${student.RollNumber}): Fail</p>`;
        }
    }
    document.getElementById("result-pas").innerHTML = output;
}

function average() {
    let total = 0;
    for (const student of studentDetails) {
        total += student.Marks;
    }
    document.getElementById("avd-marks").textContent = `Average marks: ${(total / studentDetails.length).toFixed(2)}`;
}

function marksabove() {
    let output = "";
    for (const student of studentDetails) {
        if (student.Marks > 80) {
            output += renderStudent(student);
        } else {
            continue;
        }
    }
    if (output === "") {
        output = "No students scored above 80.";
    }
    document.getElementById("80-above").innerHTML = output;
}
