class Student {
  constructor(studentName, phone_number, age, _hobbies) {
    this.studentName = studentName;
    this.phone_number = phone_number;
    this.age = age;
    this.hobbies = [];
  }
  setHobbies(hobbies) {
    this.hobbies = hobbies;
  }

  getHobbies() {
    return this.hobbies;
  }

  greetings() {
    return `Hello, my name is ${this.studentName} and I'm ${this.age} of age.`;
  }
}

const studentList = [
  {
    studentName: "Sharleen Rollo",
    phone_number: "1234567890",
    age: 25,
    hobbies: ["books", "music"],
  },
  {
    studentName: "Della Wally",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["hiking", "cars"],
  },
  {
    studentName: "Ryana Ami",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["books", "hiking"],
  },
  {
    studentName: "Lydia Mercy",
    phone_number: "1234567890",
    age: 25,
    hobbies: ["traveling", "hiking"],
  },
  {
    studentName: "Mikey Valorie",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["cars", "traveling"],
  },
  {
    studentName: "Chester Lexie",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["books", "hiking"],
  },
  {
    studentName: "Danette Luanna",
    phone_number: "1234567890",
    age: 3,
    hobbies: ["toys", "playing"],
  },
  {
    studentName: "Adalyn Goddard",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["books", "music"],
  },
  {
    studentName: "Johnnie Peta",
    phone_number: "1234567890",
    age: 30,
    hobbies: ["traveling", "hiking"],
  },
  {
    studentName: "Natile Nigellus",
    phone_number: "1234567890",
    age: 32,
    hobbies: ["music", "hiking"],
  },
];
var allStudents = [];

for (var i = 0; i < studentList.length; i++) {
  var student = new Student(
    studentList[i].studentName,
    studentList[i].phone_number,
    studentList[i].age
  );
  student.setHobbies(studentList[i].hobbies);
  allStudents[allStudents.length] = student;
}

console.log(allStudents);
console.log("Extra mile: " + allStudents[0].greetings());

for (i = 0; i < allStudents.length; i++) {
  if (
    allStudents[i].getHobbies().includes("music") |
    allStudents[i].getHobbies().includes("books")
  ) {
    console.log(allStudents[i].greetings());
  }
}
