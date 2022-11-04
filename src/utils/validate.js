export  function isValidEmail(email) {
  return /\S+@\S+\.[A-Za-z]{2,4}/.test(email);
}