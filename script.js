const username = document.getElementById('username');
const nameErrorMsgEl = document.getElementById("nameErrorMsg");

const email = document.getElementById('email');
const emailErrorMsgEl = document.getElementById("emailErrorMsg");

const password = document.getElementById('password');
const passwordErrorMsgEl = document.getElementById("passwordErrorMsg");

const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordErrorMsgEl = document.getElementById("confirmPasswordErrorMsg");

const dob = document.getElementById('dob');
const dobErrorMsgEl = document.getElementById("dobErrorMsg");

const gender = document.querySelector('input[name="gender"]:checked');
const country = document.getElementById('country');
const terms = document.getElementById('terms');
const submitButton = document.querySelector('button[type="submit"]');
    
function toggleSubmitButton() {
    submitButton.disabled = !terms.checked;
    submitButton.className = terms.checked ? 'btn-green' : '';
}


username.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrorMsgEl.textContent = "Please Enter your UserName*";
        username.classList.add("redBorder");
    }else if (!username.checkValidity()) {
        nameErrorMsgEl.textContent = "Please enter a valid username (alphanumeric, 5-15 characters).";
        username.classList.add("redBorder");
    } else {
        nameErrorMsgEl.textContent = "";
        username.classList.add("greenBorder");
    }
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email.addEventListener("blur", function(event) {

    if (event.target.value === "") {
        emailErrorMsgEl.textContent = "Please Enter your Email*";
        email.classList.add("redBorder");
    }else if (!emailRegex.test(email.value)) {
        emailErrorMsgEl.textContent = 'Invalid email format';
        email.classList.add("redBorder");
    }  else {
        emailErrorMsgEl.textContent = "";
        email.classList.add("greenBorder");
    }
});


password.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrorMsgEl.textContent = "Please Enter your Password*";
        password.classList.add("redBorder");
    }else if (!password.checkValidity()) {
        passwordErrorMsgEl.textContent = "Password should containe At least 8 characters and  mix of uppercase, lowercase, numbers, and special characters";
        password.classList.add("redBorder");
    } else {
        passwordErrorMsgEl.textContent = "";
        password.classList.add("greenBorder");
    }
});

confirmPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrorMsgEl.textContent = "Please Enter your ConfirmPassword*";
        confirmPassword.classList.add("redBorder");
    }else if (!confirmPassword.checkValidity()) {
        confirmPasswordErrorMsgEl.textContent = "Password should containe At least 8 characters and  mix of uppercase, lowercase, numbers, and special characters";
        confirmPassword.classList.add("redBorder");
    }  else {
        confirmPasswordErrorMsgEl.textContent = "";
        confirmPassword.classList.add("greenBorder");
    }
});
dob.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        dobErrorMsgEl.textContent = "Please Enter your Date of Birth*";
        dob.classList.add("redBorder");
    } else {
        dobErrorMsgEl.textContent = "";
        dob.classList.add("greenBorder");
    }
});

function validateUsername() {
    if (!username.checkValidity()) {
        nameErrorMsgEl.textContent = "Please enter a valid username (alphanumeric, 5-15 characters).";
    } else {
        nameErrorMsgEl.textContent = "";
    }
}


function handleSubmit(event) {
    event.preventDefault();

    // if (!username.value || !email.value || !password.value || !confirmPassword.value || !dob.value || !gender || !country.value || !terms) {
    //     alert("Please fill in all fields.");
    //     return;
    // }

    if (password.value !== confirmPassword.value) {
        confirmPasswordErrorMsgEl.textContent = "Password is Not Matched!!";
        return;
    }

    const today = new Date();
    const birthDate = new Date(dob.value);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
        dobErrorMsgEl.textContent = "You must be at least 18 years old to register.*";
        return;
    }


    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Username:</strong> ${username.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Date of Birth:</strong> ${dob.value}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Country:</strong> ${country.value}</p>
    `;
    resultDiv.classList.remove('hidden');
}
