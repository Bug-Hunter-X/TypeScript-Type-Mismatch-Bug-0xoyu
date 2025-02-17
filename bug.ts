function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will not work as expected because the function signature is expecting a string, but we passed an array of strings. 