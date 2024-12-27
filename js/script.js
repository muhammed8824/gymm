const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login'); 

// Sign Up
const signUpEmail = document.querySelector('.sign-up input[type="email"]');
const signUpPassword = document.querySelector('.sign-up input[type="password"]');
const signUpButton = document.querySelector('.sign-up button'); 

// Sign In
const signInEmail = document.querySelector('.sign-in input[type="email"]');
const signInPassword = document.querySelector('.sign-in input[type="password"]');
const signInButton = document.querySelector('.sign-in button');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


signUpButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    if (signUpEmail.value.trim() === "" || signUpPassword.value.trim() === "") {
        alert("Please fill in both email and password to sign up.");
    } else {
        // localStorage
        localStorage.setItem("userEmail", signUpEmail.value.trim());
        localStorage.setItem("userPassword", signUpPassword.value.trim());
        alert("Account created successfully! You can now sign in.");
        container.classList.remove("active"); 
    }
});

signInButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (
        signInEmail.value.trim() === savedEmail &&
        signInPassword.value.trim() === savedPassword
    ) {

        window.location.href = "indexx.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
