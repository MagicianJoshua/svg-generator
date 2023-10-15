const { Triangle, Circle, Square } = require("./lib/shape");

const inquirer = require("inquirer");
const fs = require("fs");

function choseShape(Shape,ShapeColor,Text,TextColor) {
  let shape = Shape.toLowerCase();
  var newShape;
  if (shape === 'triangle'){
    newShape = new Triangle(ShapeColor,Text,TextColor);
  }
  else if (shape === 'square'){
    newShape = new Square(ShapeColor,Text,TextColor);
  }
  else if (shape === 'circle'){
    newShape = new Circle(ShapeColor,Text,TextColor);
  }


  fs.writeFile("./logos/logo.svg", newShape.render(), function (err) {
    if (err) {
      throw err;
    }
    console.log("saved");
  
  })
}

function questions() {
  inquirer
    .prompt([
      {
        type:"list",
        name:"shape",
        message:"What shape would you like your logo to be?",
        choices: ["circle","triangle", "square"]

      },
      {
        type:"input",
        name:"shapeColor",
        message:"What color would you like your shape to be?"
      },
      {
        type: `input`,
        name: `letters`,
        message: `enter up to three letters to be used in your logo`,
        validate: function (input) {
          if (input.length >= 4) {
            return "You may only put up to three characters";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "letterColor",
        message: "what would you like your letters color to be?",
      },
    ])
    .then(function (response) {
      let chosenShape = response.shape.toLowerCase();
      let shapeColor = response.shapeColor.toLowerCase();
      let chosenLetters = response.letters.toUpperCase();
      let letterColor = response.letterColor.toLowerCase();
      console.log(chosenShape,shapeColor,chosenLetters,letterColor);
      choseShape(chosenShape,shapeColor,chosenLetters,letterColor);
      
      });
    };


questions();
