import toast from "react-hot-toast";

/**Validate login page username */
export const usernameValidate = (values) => {
  const errors = usernameVerify({}, values);

  return errors;
};

/**Validate login page password */
export const passwordValidate = (values) => {
  const errors = passwordVerify({}, values);

  return errors;
};

/**Validate reset password */
export const resetPasswordValidate = (values) => {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirmPassword) {
    errors.username = toast.error("Password not match...!");
  }
  return errors;
};

/**Validate register form */
export const registerFormValidation = (values) => {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
};

/************************************************************** */

/**Validate username */
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username...!");
  }
  return error;
};

/**Validate username */
const passwordVerify = (error = {}, values) => {
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("password Required...!");
  } else if (values.password.includes(" ")) {
    error.username = toast.error("Wrong password...!");
  } else if (values.password.length < 4) {
    error.username = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    error.username = toast.error("Password must have special characters");
  }
  return error;
};

/**Validate email */
const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.username = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.username = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }
  return error;
};
