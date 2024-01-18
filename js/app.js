import Swal from "sweetalert2";

let nameAlert = document.getElementById("nameAlert");
let lastNameAlert = document.getElementById("lastNameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

const message = (id, alert, input) => {
  id.textContent = alert;
  id.style.display = "block";
  input.classList.add("red-border");
};

const validateForm = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (firstName.trim() == "") {
    message(nameAlert, "First name cannot be empty", firstNameInput);
  }

  if (lastName.trim() == "") {
    message(lastNameAlert, "Last name cannot be empty", lastNameInput);
  }

  if (email.trim() == "") {
    message(emailAlert, "Looks like this is not an email", emailInput);
  }
  if (password.trim() == "") {
    message(passwordAlert, "Password cannot be empty", passwordInput);
  }
};

const clearWarning = (input, alert) => {
  input.classList.remove("red-border");
  alert.style.display = "none";
};
