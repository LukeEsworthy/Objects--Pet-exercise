const myPet = {
  name: "Don Alejandro de la Vega",
  species: "Russian Blue",
  nicknames: ["Pookie", "Fat Bastard"],
  age: 11,
  purr: function () {
    console.log("Pookie purrs very loudly.");
  },
  meow: function () {
    window.alert("MEOW");
  },
  chomp: function () {
    console.log(
      "Pookie loves his food and is an excellent eater. The best eater. Way better than any other eater."
    );
  },
  favoriteToys: [],
  play: function (toy) {
    if (toy === "furry") {
      this.favoriteToys.push(toy);
    } else {
      console.log("He did not like the toy.");
    }
  },
};
let toy = "furry";
