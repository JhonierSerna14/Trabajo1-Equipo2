const controller = require ("../controller/logic/mascota.controller");


exports.studentGroupRoutes = (app) => {
  app.get("/studentGroup", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/studentGroup/bycode/:code", (req, res, next) => {
    console.log("Getting studentGroup by code");
    controller.getByCode(req, res, next);
  });

  app.post("/studentGroup", (req, res, next) => {
    controller.createStudentGroup(req, res, next);
  });

  app.put("/studentGroup", (req, res, next) => {
    controller.updateStudentGroup(req, res, next);
  });

  app.delete("/studentGroup", (req, res, next) => {
    controller.deleteStudentGroup(req, res, next);
  });
};

