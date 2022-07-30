const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

// addEventListener('event', function(){} );
btn.addEventListener('click', () => {
  // when the user clicks on btn, this arrow function will execute.
    // classList selects all the classes of nav element
    // toggle() method adds & removes CSS classes whether they exist or not in your array
      // here toggle() method adds active classes, so when the user clicks the btn nav.active or button.active CSS code is activated.
  nav.classList.toggle('active');
  btn.classList.toggle('active');
});

