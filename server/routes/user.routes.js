import UserController from "../controllers/user.controller.js";

export const UserRoutes = (app) => {
  app.post("/users", UserController.apiRegisterUserInformation);

  app.post("/diagnostics/avc", UserController.apiProcessAVCInformation);

  app.get("/diagnostics/avc", UserController.apiGetAVCModelResults);

  app.get("/test", UserController.test_simple);

  app.get("/test/:nom", UserController.test_avec_nom);
};
