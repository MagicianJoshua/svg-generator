
import { Triangle,Circle,Square  } from "./lib/shape";

const inquirer = require("inquirer");
const fs = require("fs");

var triangle = new Triangle();



function questions() {
  
    inquirer.prompt([
      {
        type: `input`,
        name: `letters`,
        message: `enter up to three letters to be used in your logo`,
        validate:function (input) {
          if (input.length >= 4){
            return "You may only put up to three characters";
          }
          return true;
        } 
      },
      {
        type:'input',
        name:'letterColor',
        message:'what would you like your letters color to be?'
      }
    ])
    .then(function (response) {
      fs.writeFile('logo.svg', 'hello', function(err) {
        if (err) {
          throw err;
        }
        console.log('saved');
      });
    })

  }

questions();

