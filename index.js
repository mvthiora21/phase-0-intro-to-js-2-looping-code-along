// Code your solutions in this file

function writeCards(namesArray, eventName) {
    let cardsArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArray;
  }
  
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage
  let messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  countDown(5);
  
