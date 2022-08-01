const text = 'My viewers on Twitch are the best!! ❤';

let index = 0;

function writeText(){
  // inside body, add the text variable, starting from index 1 (so 0) to whatever value index variable is.
    // The slice() method returns a shallow copy of a portion of an array (in this case text) into a new  object (in this case body) selected from start to end (end not included).
  document.body.innerText = text.slice(0, index);

  // everytime writeText is invoked, increment index variable by 1.
  index++;

  if(index > text.length){
    index = 0;
  }
}
// write the textevery 100 milliseconds 
setInterval(writeText, 100);