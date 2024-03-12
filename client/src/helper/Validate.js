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
