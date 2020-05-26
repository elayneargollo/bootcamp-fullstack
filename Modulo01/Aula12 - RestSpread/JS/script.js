window.addEventListener("load", () => {
  //  doSpread();
  //  doRest();
  doDestructuring();
});

function doDestructuring() {
  const first = people[0];

  //Repetitivo
  //  const username = first.login.username;
  //  const password = first.login.password;

  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}

function doRest() {
  console.log(infiniteSum(1, 2));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doSpread() {
  const marriedMen = people.filter((person) => person.name.title === "Mr");

  const marriedWomen = people.filter((person) => person.name.title === "Ms");

  const marriePeople = [...marriedMen, ...marriedWomen];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriePeople);
}
