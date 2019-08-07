/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function createMenu () {
  // define elements
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  

  // set the structure
  menu.appendChild(ul);
  
   // set content
  menuItems.forEach(item =>{
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  })

  // set class
  menu.classList.add('menu');

  // select menu-button class
  const menuBtn = document.querySelector('.menu-button');

  // button event
  menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu--open');
  })

  return menu;
}

const body = document.querySelector('body');
body.appendChild(createMenu());

