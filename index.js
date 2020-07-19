// Code your solutions in this file

const arr = ["Ada", "Brendan",  "Ali"];
const event = "birthday";

function writeCards(arr, event) {
    for (let i = 0; i < arr.length; i++)
        console.log(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
}
writeCards(arr, event);


function countDown(i){
  while(i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);
