const validUsernamePasswords = [
  {
    username: "kunal",
    password: "1234",
  },
  
];

const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");

usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

function clearError() {
  passwordTag.innerText = "";
}

window.history.forward();
function noBack() {
  window.history.forward();
}
loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "User Doesn't Exist";
  } else if (currentUser.password === password) {


    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    
    window.location.href = "./resume-page.html";
  } else {
    passwordTag.innerText = "Invalid Credentials";
  }
}
