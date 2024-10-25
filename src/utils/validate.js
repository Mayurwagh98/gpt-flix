export const validateForm = (email, password) => {
  const validEmail = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "Not a valid password";

  return "Successfully done!";
};
