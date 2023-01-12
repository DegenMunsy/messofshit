//Get elements from the DOM
const inputs = document.querySelectorAll(".input-wrap input");
const formBtn = document.querySelector("#form-open-btn");
const form = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close");
const video = document.querySelector('.sign-up video');
const burnBtn = document.querySelector('.burn-btn');
const fileInput = document.querySelector('input[type="file"]');
const img = document.createElement('img');
img.classList.add('my-image');
const selectedImage = document.getElementById('selectedImage');


//Select all input fields
inputs.forEach(input => {
  //Add a focus event
  input.addEventListener('focus', e => {
    //Add focus styles to the label
    input.previousElementSibling.classList.add('input-focused');
  });
  //Add a blur event
  input.addEventListener('blur', () => {
    //Check if the input field is empty
    if(input.value === "" || input.value === null) {
      //Remove focus styles from the label
      input.previousElementSibling.classList.remove('input-focused');
    }
  });
});

//Add a click event to the form open button
formBtn.addEventListener('click', () => {
  //Add show styles from the form
  form.classList.add('form-show');
  //Hide the form show button
  formBtn.style.display = "none";
});

//Add a click event to the form close button
closeBtn.addEventListener('click', () => {
  //Remove show styles from the form
  form.classList.remove('form-show');
  //Show the form show button
  formBtn.style.display = "block";
});

//Add a click event to the burn button
burnBtn.addEventListener('click', () => {
  //Open a new page titled "race.html"
  window.open('race.html', '_blank');
});

//Add a change event to the file input
fileInput.addEventListener('change', e => {
  //Get the selected file
  const file = e.target.files[0];
  
  //Create a new FileReader object
  const reader = new FileReader();
  
  //Add a load event to the reader
  reader.addEventListener('load', () => {
    //Create an image element
    const img = document.createElement('img');
    //Add the 'my-image' class to the image
    img.classList.add('my-image');
    //Set the src attribute of the image to the result of the reader
    img.src = reader.result;
    //Append the image to the body
    document.body.appendChild(img);
  });
  
  //Read the file as an image
  reader.readAsDataURL(file);
});

