// Corrobora que el email sea valido
export function isValidEmail(str) {
  const regexValidEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regexValidEmail.test(str);
}

// Corrobora si hay caracteres especiales entro del str.
export function hasSpecialChars(str) {
  const regexSpecialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return regexSpecialChars.test(str);
}

export default function validate(input) {
  const error = {};

  if (!input.email_or_username) {
    error.email_or_username = "Email or Username is required";
  } else if (hasSpecialChars(input.email_or_username)) {
    error.email_or_username = "Username may not contain special characters";
  } else if (input.email_or_username.trim() === "") {
    error.email_or_username = "Email or Username may not be empty";
  }

  if (!input.password) {
    error.password = "Password is required";
  } else if (hasSpecialChars(input.password)) {
    error.password = "Password may not contain special characters";
  }
  return error
}
