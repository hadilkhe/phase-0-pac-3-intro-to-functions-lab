// Task 1: shout
function shout(string) {
    return string.toUpperCase();
  }

 //Task 2: whisper
function whisper(string) {
  return string.toLowerCase();
}

//Task 3: logShout
function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  //Task 4: logWhisper
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  //Task 5: sayHiToGrandma
  function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
  }
  