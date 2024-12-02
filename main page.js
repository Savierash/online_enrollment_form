//back
const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash",  "uil-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye",  "uil-eye-slash");
        }
    });
});

//signup
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

//Registration
// Function to show the success popup
function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  // Function to close the success popup
  function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
  }
  
  // Function to handle form submission
  document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    showPopup(); // Show the success popup
  });
  


