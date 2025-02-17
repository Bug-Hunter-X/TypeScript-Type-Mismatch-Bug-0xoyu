function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct handling of array input

let user2 = "Jane Doe";
console.log(greeter(user2)); // Correct handling of string input