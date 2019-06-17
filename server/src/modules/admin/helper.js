const mongoose = require("mongoose");

const Admin = require("./model");
const Semestre = require("../semestre/semestreModel");
const Bio = require("../bio/sobreModel");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Types;

export const generateToken = user => {
  const token = jwt.sign({ id: user._id }, config.env.JWT_KEY);
  // console.log("CREATED TOKEN >> ", token);
  return token;
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    Admin.findOne({ email, password })
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

export const createSemester = (
  num,
  nome,
  materias,
  crawTitle,
  crawlSubtitle,
  crawlText
) => {
  return new Promise((resolve, reject) => {
    const semestre = new Semestre({
      num,
      nome,
      materias,
      crawTitle,
      crawlSubtitle,
      crawlText
    });
    semestre
      .save()
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("createSemester ERR >> ", err);
        reject(err);
      });
  });
};

export const getSemesters = () => {
  return new Promise((resolve, reject) => {
    Semestre.find()
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("getSemesters ERR >> ", err);
        reject(err);
      });
  });
};
export const getBio = () => {
  return new Promise((resolve, reject) => {
    Bio.find()
      .then(result => {
        console.log("RESULT >> ", result);
        resolve(result);
      })
      .catch(err => {
        console.log("getBio ERR >> ", err);
        reject(err);
      });
  });
};

export const updateSemester = (
  _id,
  num,
  nome,
  materias,
  crawTitle,
  crawlSubtitle,
  crawlText
) => {
  return new Promise((resolve, reject) => {
    console.log(_id, num, nome, materias, crawTitle, crawlSubtitle, crawlText);
    Semestre.findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: { num, nome, materias, crawTitle, crawlSubtitle, crawlText } },
      { new: true }
    )
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("updateSemester ERR >> ", err);
        reject(err);
      });
  });
};

export const deleteSemester = _id => {
  return new Promise((resolve, reject) => {
    Semestre.findOneAndDelete({ _id })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("delSemester ERR >> ", err);
        reject(err);
      });
  });
};

export const updateBio = (_id, title, text) => {
  return new Promise((resolve, reject) => {
    Bio.findOneAndUpdate({ _id }, { $set: { title, text } }, { new: true })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("updateBio ERR >> ", err);
        reject(err);
      });
  });
};

export const createBio = (title, text) => {
  return new Promise((resolve, reject) => {
    const bio = new Bio({
      title,
      text
    });
    bio
      .save()
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log("createBio ERR >> ", err);
        reject(err);
      });
  });
};
