const Admin = require("./model");
const jwt = require("jsonwebtoken");

export const generateToken = user => {
  const token = jwt.sign({ id: user._id }, config.env.JWT_KEY);
  console.log("CREATED TOKEN >> ", token);
  return token;
};

export const login = (user, password) => {
  return new Promise((resolve, reject) => {
    Admin.findOne({ user, password })
      .then(result => {
        if (result === null) {
          reject("NOT FOUND");
        } else {
          resolve(result);
        }
      })
      .catch(err => {
        console.log("SIGN UP ERR >> ", err);
        reject(err);
      });
  });
};

export const signUp = (user, email, password) => {
  console.log("HELPER >> ", user, email, password);
  return new Promise((resolve, reject) => {
    const admin = new Admin({
      user,
      email,
      password
    });
    admin
      .save()
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("SIGN UP ERR >> ", err);
        reject(err);
      });
  });
};
