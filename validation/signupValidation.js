const validator = require("validator");

function handleSignupValidation({username, email, password,terms}) {
 

  // Email validation
  if (!email) {
    throw new Error("Email is required.");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  // Username validation
  if (!username) {
    throw new Error("Username is required.");
  }
  if (username.length > 20) {
    throw new Error("Username must not exceed 20 characters.");
  }

  // Password validation
  if (!password) {
    throw new Error("Password is required.");
  }
  if (password.length < 4 || password.length > 8) {
    throw new Error("Password must be between 4 and 8 characters long.");
  }

  // Terms & conditions
  if (!terms) {
    throw new Error("You must accept the terms and conditions to continue.");
  }
}

module.exports = { handleSignupValidation };
