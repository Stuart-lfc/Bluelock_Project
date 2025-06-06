const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Toggle animations
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Redirect on form submission
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    window.location.href = "/bluelockTeams.html"; 
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    window.location.href = "/bluelockTeams.html"; 
});
