export  function isValidEmail(email) {
  return /\S+@\S+\.[A-Za-z]{2,4}/.test(email);
}
export function isValidName(name) {
    return /^[а-яА-ЯёЁa-zA-Z\s_]+$/.test(name);
}