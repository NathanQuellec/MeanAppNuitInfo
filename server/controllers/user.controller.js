import UserService from "../services/user.service.js";

export default class UserController {
  constructor() {}

  static async flaks_test(req, res, next) {
    try {
      const test = await UserService.getMessageFromFlask();
      res.json(test);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiRegisterUserInformation(req, res, next) {
    try {
      console.log(`Processing User Information ${req.body.name}`);
      const userRegistration = await UserService.registerUserInformation(
        req.body
      );
      res.json(userRegistration);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetUserInformation(req, res, next) {
    try {
      console.log("Get User Information");
      const userRetrieval = await UserService.getUserInformation();
      if (!userRetrieval) {
        res.status(404).json("Not found");
      }
      res.json(userRetrieval);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
