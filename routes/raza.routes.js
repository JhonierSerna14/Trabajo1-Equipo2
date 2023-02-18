const controller = require ("../controller/logic/raza.controller");

exports.mascotaRoutes = (app) => {
  app.get("/raza", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/raza/bycode/:code", (req, res, next) => {
    console.log("Getting breed by code");
    controller.getByCode(req, res, next);
  });

  app.post("/raza", (req, res, next) => {
    controller.createStudentGroup(req, res, next);
  });

  app.put("/raza", (req, res, next) => {
    controller.updateStudentGroup(req, res, next);
  });

  app.delete("/raza", (req, res, next) => {
    controller.deleteStudentGroup(req, res, next);
  });
};