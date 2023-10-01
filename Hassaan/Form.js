/* image with radio buttons start */
function showImage(foodType) {
    const saladImage = document.getElementById('salad-image');
    const noneImage = document.getElementById('none-image');


    if (foodType === 'salad') {
        saladImage.classList.remove('hidden');
        noneImage.classList.add('hidden');
    } else if (foodType === 'none') {
        saladImage.classList.add('hidden');
        noneImage.classList.remove('hidden');
    }

}

function show_pizzaimg(tyfood) {
    const cheeseImage = document.getElementById('cheese-image');
    const veggieImage = document.getElementById('veggie-image');
    const pepperoniImage = document.getElementById('pepperoni-image');
    if (tyfood === 'cheese') {
        cheeseImage.classList.remove('hidden');
        veggieImage.classList.add('hidden');
        pepperoniImage.classList.add('hidden');
    }
    else if (tyfood === 'veggie') {
        cheeseImage.classList.add('hidden');
        veggieImage.classList.remove('hidden');
        pepperoniImage.classList.add('hidden');
    }
    else if (tyfood == 'pepperoni') {
        cheeseImage.classList.add('hidden');
        veggieImage.classList.add('hidden');
        pepperoniImage.classList.remove('hidden');
    }

}

function show_drinkimg(thefood) {
    const cokeimage = document.getElementById('coke-image');
    const pepsiimage = document.getElementById('pepsi-image');
    const mountaindewimage = document.getElementById('mountaindew-image');
    if (thefood === 'coke') {
        cokeimage.classList.remove('hidden');
        pepsiimage.classList.add('hidden');
        mountaindewimage.classList.add('hidden');
    }
    else if (thefood === 'pepsi') {
        cokeimage.classList.add('hidden');
        pepsiimage.classList.remove('hidden');
        mountaindewimage.classList.add('hidden');
    }
    else if (thefood == 'mountaindew') {
        cokeimage.classList.add('hidden');
        pepsiimage.classList.add('hidden');
        mountaindewimage.classList.remove('hidden');
    }

}
/*img with radio button end*/


/*submit button start with pop up settings*/

const submitOrderButton = document.getElementById('submit-order-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('button');
function showPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}

submitOrderButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const no = document.getElementById("phone").value;
    const address = document.getElementById("street-address").value;
    const text = document.getElementById("txtarea").value;
    const noneChecked = document.getElementById("none").checked;
    const saladChecked = document.getElementById("salad").checked;
    const cheeseChecked = document.getElementById("CheesePizza").checked;
    const VeggieChecked = document.getElementById("Veggiepizza").checked;
    const pepperoniChecked = document.getElementById("PepperoniPizza").checked;
    const cokeChecked = document.getElementById("coke").checked;
    const pepsiChecked = document.getElementById("Pepsi").checked;
    const mountaindewChecked = document.getElementById("Mountaindew").checked;

    if (name === "" || email === "" || no === "" || address === "" || text === "" || (!noneChecked && !saladChecked) || (!VeggieChecked && !cheeseChecked && !pepperoniChecked) || (!cokeChecked && !pepsiChecked && !mountaindewChecked)) {
        alert("Please fill in all required fields and select at least one food item.");
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
        return;
    }
    else {
        showPopup();
    }
    validateUsername();
    validateEmail();

    // Check if there are any error messages
    const usernameError = document.getElementById("usernameError").textContent;
    const emailError = document.getElementById("emailError").textContent;

    if (usernameError === "" && emailError === "") {
        showPopup();


    } else {
        // Form has validation errors
        alert("Please correct the form errors before submitting.");
        closePopup();
    }

});
closeButton.addEventListener('click', closePopup);

/*submit button end*/






/*reset button start*/



const resetButton = document.getElementById('reset-button');
// Add an event listener to the reset button
resetButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Reset the form elements
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('street-address').value = '';
    document.getElementById('txtarea').value = '';

    // Reset the radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });

    // Hide all images by adding the "hidden" class
    const images = document.querySelectorAll('img');
    images.forEach(function (image) {
        image.classList.add('hidden');
    });
});


/*reset button end*/

/*VALIDATION ON INPUT AND EMAIL START */
// Validation function for Name
function validateUsername() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("usernameError");
    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = ""; // Clear any previous error message
    }
}

// Validation function for Email
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue === "") {
        emailError.textContent = "Email is required";
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = ""; // Clear any previous error message
    }
}

// Add event listeners for validation on blur
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("blur", validateUsername); // Trigger onblur event for name
emailInput.addEventListener("blur", validateEmail); //Trigger onblur event for email
/*VALIDATION ON INPUT AND EMAIL END */