const controller = require ("../controller/logic/breed.controller");

exports.mascotaRoutes = (app) => {
  app.get("/breed", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/breed/bycode/:code", (req, res, next) => {
    console.log("Getting breed by code");
    controller.getByCode(req, res, next);
  });

  app.post("/breed", (req, res, next) => {
    controller.createStudentGroup(req, res, next);
  });

  app.put("/breed", (req, res, next) => {
    controller.updateStudentGroup(req, res, next);
  });

  app.delete("/breed", (req, res, next) => {
    controller.deleteStudentGroup(req, res, next);
  });
};