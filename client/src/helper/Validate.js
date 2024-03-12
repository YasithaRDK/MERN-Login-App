import toast from "react-hot-toast";

/**Validate login page username */
export const usernameValidate = (values) => {
  const errors = usernameVerify({}, values);

  return errors;
};

/**Validate username */
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username");
  }
  return error;
};
