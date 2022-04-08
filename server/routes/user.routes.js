import UserController from "../controllers/user.controller.js";

export const UserRoutes = (app) => {
  app.post("/users", UserController.apiRegisterUserInformation);

  app.post("/diagnostics/avc", UserController.apiProcessAVCInformation);

  app.get("/diagnostics/avc", UserController.apiGetAVCModelResults);
};
