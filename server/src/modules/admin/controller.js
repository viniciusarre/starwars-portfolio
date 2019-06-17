const helper = require("./helper");

export const signUp = (req, res) => {
  console.log("====================================");
  // console.log(req.query);
  console.log(req.body);
  console.log("=================controller===================");
  const { user, email, password } = req.body;
  console.log(user, email, password);
  //    console.log("BODY >> ", req.body);
  helper
    .signUp(user, email, password)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export const login = (req, res, next) => {
  const { email, password } = req.body;
  helper
    .login(email, password)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(500).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const createSemester = (req, res, next) => {
  const { num, nome, materias, crawTitle, crawlSubtitle, crawlText } = req.body;
  helper
    .createSemester(num, nome, materias, crawTitle, crawlSubtitle, crawlText)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const updateSemester = (req, res, next) => {
  const {
    _id,
    num,
    nome,
    materias,
    crawTitle,
    crawlSubtitle,
    crawlText
  } = req.body;
  helper
    .updateSemester(
      _id,
      num,
      nome,
      materias,
      crawTitle,
      crawlSubtitle,
      crawlText
    )
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const deleteSemester = (req, res, next) => {
  const { _id } = req.body;
  helper
    .deleteSemester(_id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const updateBio = (req, res, next) => {
  const { _id, title, text } = req.body;
  helper
    .updateBio(_id, title, text)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const getBio = (req, res, next) => {
  // const { _id, title, text } = req.body;
  helper
    .getBio()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const getSemesters = (req, res, next) => {
  // const { _id, title, text } = req.body;
  helper
    .getSemesters()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const createBio = (req, res, next) => {
  const { title, text } = req.body;
  helper
    .createBio(title, text)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

export const getSemesterById = (req, res, next) => {
  const { _id } = req.body;
  helper
    .getSemesterById(_id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      if (err === "NOT FOUND") {
        res.status(404).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};
