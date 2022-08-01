const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

// add event listener to open element
open.addEventListener('click', () => {
  // add a class called active to container variables elements.
  container.classList.add('active');

});

// add event listener to close element
  // when user clicks on close element, the arrow function is called & it removes the box & its content (& goes back to open button)
close.addEventListener('click', () => {
// So when user closes the box using the x in the corner, containers class called active gets removed.
  container.classList.remove('active');
});