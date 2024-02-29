const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const isPassword = (password) => {
  if (password.length > 5) {
    return true;
  }
  return false;
};

const isUsername = (username) => {
  return /^[a-zA-Z0-9_-]{3,16}$/.test(username);
};

module.exports = { isEmail, isPassword, isUsername };
