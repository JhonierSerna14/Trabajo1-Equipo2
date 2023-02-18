const controller = require ("../controller/logic/mascota.controller");

exports.mascotaRoutes = (app) => {
  app.get("/mascota", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/mascota/bycode/:code", (req, res, next) => {
    console.log("Getting pet by code");
    controller.getByCode(req, res, next);
  });

  app.post("/mascota", (req, res, next) => {
    controller.createStudentGroup(req, res, next);
  });

  app.put("/mascota", (req, res, next) => {
    controller.updateStudentGroup(req, res, next);
  });

  app.delete("/mascota", (req, res, next) => {
    controller.deleteStudentGroup(req, res, next);
  });
};

