const btn = document.getElementById("btn");
const container = document.getElementById("container");


// add event listener to btn
  //when user clicks on btn activate the arrow function, which invokes the createNotification(); function.
btn.addEventListener('click', () => {
  createNotification();
});

function createNotification(){
  // here createElement() to create a new  HTML element and attach it to the DOM tree. 
  // createElement() accepts an HTML tag name and returns a new Node with the Element type, in this case thats div element.
    // Then store in notif variable
    // so this is just dynamically creating div elements??
  const notif = document.createElement('div');
  // the div element stored in notif will be in the CSS class toast
    // this is just putting elements into a class form me without me having to use the class attribute??
  notif.classList.add('toast');

  // whenever the button is clicked, this text will show up
  notif.innerText = "This challenge is crazy!"; 

  // add the notif element & its content "This challenge is crazy!" to container div
  container.appendChild(notif); 

  // i dont want the notification hanging around the screen so set it to timeout after 3sec then it'll be removed.
  setTimeout(() => {
    notif.remove();
  }, 3000);

}