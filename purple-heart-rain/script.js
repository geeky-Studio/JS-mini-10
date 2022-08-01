// createElement(HTML element name);
function createHeart(){
  const heart = document.createElement('div');

  heart.classList.add('heaRT');

  // style the heart from the left to be at random from 0*100 + viewport width. So that the hearts are spread acrross the screen.
  heart.style.left = Math.random() * 100 + 'vw';

  // Have the heart animation ( by having random() )be between 2-5 seconds so it'll be faster.
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💜"; // 💚💜

  // add it to the HTML body
  document.body.appendChild(heart);

  // Remove hearts after 5 seconds.
    // huh even in the Tut the hearts didnt remove after 5sec.
  setTimeout( () => { 
    heart.remove();
  }, 5000);
}
// run createHeart every 300 milliseconds
  // so print a heart out onto the screen every 300 milliseconds. 
setInterval(createHeart, 300);