// function Book(title, author, pageCount, read) {
//   this.title = title;
//   this.author = author;
//   this.pageCount = pageCount;
//   this.read = read;
//   this.info = function () {
//     return `${title} by ${author}, ${pageCount} pages, ${read}.`;
//   };
// }

// const theHobbit = new Book(
//   "The Hobbit",
//   "J.R.R. Tolkien",
//   "295",
//   "not read yet"
// );

// console.log(theHobbit.info());

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};

Student.prototype.goToProm = function () {
  console.log("Eh.. goto prom?");
};
