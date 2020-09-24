let employees = [
  {
    name: "Ajay",
    age: 22,
    city: "Coimbatore",
    salary: 1000,
  },
  {
    name: "Bala",
    age: 23,
    city: "Selam",
    salary: 2000,
  },
  {
    name: "Dinesh",
    age: 25,
    city: "pollachi",
    salary: 3000,
  },
];

function display(employeeData) {
  let tabledata = "";

  employeeData.forEach(function (employeeData, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employeeData.name}</td>
      <td>${employeeData.age}</td>
      <td>${employeeData.city}</td>
      <td>${employeeData.salary}</td>
      <td>
      <button onclick='deleteEmployee(${index})'>delete</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display(employees);

//adding the employee
function addEmployee(e) {
  e.preventDefault();
  let employee = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;

  employee.name = name;
  employee.age = Number(age);
  employee.city = city;
  employee.salary = Number(salary);

  employees.push(employee);

  display(employees);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
}

//searching the employee
function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = employees.filter(function (employee) {
    return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  display(newdata);
}

//delete
function deleteEmployee(index) {
  employees.splice(index, 1);
  display(employees);
}
