const controller = require ("../controller/logic/pet.controller");

exports.mascotaRoutes = (app) => {
  app.get("/pet", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/pet/bycode/:code", (req, res, next) => {
    console.log("Getting pet by code");
    controller.getByCode(req, res, next);
  });

  app.post("/pet", (req, res, next) => {
    controller.createStudentGroup(req, res, next);
  });

  app.put("/pet", (req, res, next) => {
    controller.updateStudentGroup(req, res, next);
  });

  app.delete("/pet", (req, res, next) => {
    controller.deleteStudentGroup(req, res, next);
  });
};

