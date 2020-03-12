const matchPassword = (password: String, confrimPassword: String) => {
  const result = password === confrimPassword;
  return result;
};

export default {
  matchPassword,
};
