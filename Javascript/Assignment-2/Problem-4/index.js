//Script

var userData = [
  {
    name: "ram",
    age: 20,
    country: "india",
    hobbies: ["playing", "music"],
  },
  {
    name: "raj",
    age: 29,
    country: "usa",
    hobbies: ["indoor games", "music"],
  },
  {
    name: "ragav",
    age: 30,
    country: "india",
    hobbies: ["outer games", "music"],
  },
  {
    name: "karan",
    age: 30,
    country: "srilanka",
    hobbies: ["outer games", "music"],
  },
  {
    name: "varun",
    age: 35,
    country: "india",
    hobbies: ["outer games", "music"],
  },
];

function age() {
  var ageData = [];
  for (i in userData) {
    if (userData[i].age < 30) {
      ageData.push(userData[i]);
    }
  }
  document.getElementById("showAge").innerHTML = JSON.stringify(ageData);
}
function country() {
  var countryData = [];
  for (i in userData) {
    if (userData[i].country === "india") {
      countryData.push(userData[i]);
    }
  }
  document.getElementById("showCountry").innerHTML = JSON.stringify(
    countryData
  );
}
