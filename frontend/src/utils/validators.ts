export const isEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPassword = (password: string): boolean => {
  if (password.length > 5) {
    return true;
  }
  return false;
};

export const isUsername = (username: string): boolean => {
  return /^[a-zA-Z0-9_-]{3,16}$/.test(username);
};

export const isPhoneNumber = (phoneNo: string): boolean => {
  return /^[6-9]\d{9}$/.test(phoneNo);
};
