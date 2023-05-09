//Dark mode capabilties 
themeButton = document.getElementById("togglemode");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode)
//Dark mode capabilites 

//Form Capabilities//
const signNowButton = document.getElementById('sign-now-button');
const AddSignature = () => {
  let name = document.getElementById('name').value;
  let hometown = document.getElementById('hometown').value;
  let email = document.getElementById('email').value;

  const newp = document.createElement('p');
  newp.textContent = "🖊️" + name + ' from ' + hometown + ' supports this';

  const sigelement = document.getElementById("signatures");
  sigelement.appendChild(newp);
}

//Form Validation 

const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };

  for (let i = 0; i < petitionInputs.length; i++) { //Validates users input in form 
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }

    if (!person.email.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  }

  if (containsErrors == false) {
    AddSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    toggleModal(person);
  }
}

signNowButton.addEventListener('click', validateForm);
//Form Validation 

//Form Capabilities 

//Animations 
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  // Loop through each revealable container
  for (let i = 0; i < revealableContainers.length; i++) {
    // Get the height of the window
    let windowHeight = window.innerHeight;

    // Get the top position of the revealable container
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    // Check if the revealable container is in the right position to be revealed
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      // If it is, add the "active" class to its classlist
      revealableContainers[i].classList.add('active');
    } else {
      // If it's not, remove the "active" class from its classlist
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Add reveal as an event listener to window, with the type of event as 'scroll'
window.addEventListener('scroll', reveal);
function toggleModal(person) {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}!`;

  const modalImage = document.getElementById("modalimage");
  let scaleFactor = 1;

  function scaleImage() {
    if (scaleFactor === 1) {
      scaleFactor = 0.8;
    } else {
      scaleFactor = 1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`;
  }

  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}


