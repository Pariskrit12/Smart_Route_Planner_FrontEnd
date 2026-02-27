export const validation = (username, email, password) => {
  const newErrors = {};
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!username.trim()) {
    newErrors.username = "Username is Required";
  }
  if (!email.trim()) {
    newErrors.email = "Email is Required";
  } else if (!emailRegex.test(email)) {
    newErrors.email = "Invalid email";
  }

  if (!password) {
    newErrors.password = "Password is Required";
  } else if (!passwordRegex.test(password)) {
    newErrors.password = "Min 8 chars, 1 uppercase, 1 number, 1 special char";
  }
  return newErrors;
};
