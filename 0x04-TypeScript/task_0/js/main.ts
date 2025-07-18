interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: Student = {
  firstName: "Feyruza",
  lastName: "Dawud",
  age: 22,
  location: "Addis Ababa",
};
let student2: Student = {
  firstName: "Hanan",
  lastName: "Mohammed",
  age: 21,
  location: "Addis Ababa",
};

let studentsList = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((Student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.textContent = Student.firstName;
  const cell2 = row.insertCell();
  cell2.textContent = Student.location;
});

document.body.appendChild(table);
