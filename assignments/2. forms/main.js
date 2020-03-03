// Input for Full Name, Email, Password & button for Sign Up

function signUpForm() {
  var fullName = document.form.name.value;
  var yourMail = document.form.email.value;
  var password = document.form.password.value;

  if (fullName == "") {
    return false;
  } else if (yourMail == "") {
    return false;
  } else if (password == "") {
    return false;
  } else {
    alert(`You are  ${fullName} Your mail ${yourMail} Password is ${password}`);
  }
}
