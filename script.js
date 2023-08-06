'use strict';

let array = [];


          function toDo () {
            let cicle = true;
            let counter = 0;

            while (cicle) {
            let choice = prompt(`To ADD smth enter 1\nTo DELETE smth enter 2\nTo SHOW THE LIST enter 3`, "");
            let showList = array.reduce((total, value, index) => 
                    total + `to do #${index + 1}: ${value} \n`, 'TODO LIST:\n');
            let response;
              if (choice == 1) {
                while (true) {
                    response = prompt("Enter what to ADD", "");
                    if (response == null || response == ''){
                      break;
                    }
                    else {
                      array.push(response);
                    }
                }
              }
              else if (choice == 2) {
                while (counter < 1000) {
                    response = prompt(`WHAT number to DELETE? From 1 to ${array.length} \n ${showList}`, '');
                    if (response == null || response == ''){
                      break;
                    }
                    else if (+response > array.length || isNaN(+response) || +response == 0) {
                      alert(`Enter a number from 1 to ${array.length}!`);
                    }
                    else {
                      array.splice(+response - 1, 1);
                    }
                    counter++;
                    showList = array.reduce((total, value, index) => 
                      total + `to do #${index + 1}: ${value} \n`, 'TODO LIST:\n');
              }
            }
              else if (choice == 3) {
              // for (let i = 0; i < array.length; i++) {
                  alert(showList);
              //  }
              }
              else {
                cicle = false;
              }
              counter = 0;
            }
          }
          // toDo();
