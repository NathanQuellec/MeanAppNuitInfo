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

  static async apiRegisterAVCInformation(req, res, next) {
    try {
      console.log(`Processing User Information ${req.body.name}`);
      const avcInfoRegister = await UserService.registerAVCInformation(
        req.body
      );
      res.json(avcInfoRegister);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiSendAVCInformationToFlask(req, res, next) {
    try {
      console.log(`Send avc info to flask ${req.body.name}`);
      const avcInfoSend = await UserService.sendAVCInformationToFlask(
        req.body
      );
      res.json(avcInfoSend);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }


}
