const inputPassword=document.getElementById("password");
const eyeIcon=document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function() {
    if (inputPassword.type==="password") {
        inputPassword.type="text";
        eyeIcon.textContent="🙉";
    } else {
        inputPassword.type="password";
        eyeIcon.textContent="👁️";
    }
})