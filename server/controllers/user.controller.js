import UserService from "../services/user.service.js";

export default class UserController {
  constructor() {}

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

  static async apiProcessAVCInformation(req, res, next) {
    try {
      //on envoie les donnees du formulaire a flask pour la prediction
      const avcResultsReceived = await UserService.sendAVCInformationToFlask(
        req.body
      );
      // on enregistre le resultat de la prediction dans mongo
      const avcResultsSaved = await UserService.registerAVCModelResultsToMongo(
        avcResultsReceived
      );
      res.json(avcResultsReceived + " " + avcResultsSaved);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiProcessHeartInformation(req, res, next) {
    try {
      //on envoie les donnees du formulaire a flask pour la prediction
      const heartResultsReceived = await UserService.sendHeartInformationToFlask(
        req.body
      );
      // on enregistre le resultat de la prediction dans mongo
      const heartResultsSaved = await UserService.registerHeartModelResultsToMongo(
        heartResultsReceived
      );
      res.json(heartResultsReceived + " " + heartResultsSaved);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiProcessDiabeteInformation(req, res, next) {
    try {
      //on envoie les donnees du formulaire a flask pour la prediction
      const diabeteResultsReceived = await UserService.sendDiabeteInformationToFlask(
        req.body
      );
      // on enregistre le resultat de la prediction dans mongo
      const diabeteResultsSaved = await UserService.registerDiabeteModelResultsToMongo(
        diabeteResultsReceived
      );
      res.json(diabeteResultsReceived + " " + diabeteResultsSaved);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }



  static async apiGetAVCModelResults(req, res, next) {
    try {
      console.log("Get Model Results");
      const resultsRetrieval = await UserService.getAVCModelResults();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetAVCModelResultsHistory(req, res, next){
    try {
      console.log("Get Model Results History");
      const resultsRetrieval = await UserService.getAVCModelResultsHistory();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
      return;
    }
  }

  static async apiGetDiabeteModelResults(req, res, next) {
    try {
      console.log("Get Model Results");
      const resultsRetrieval = await UserService.getDiabeteModelResults();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetDiabeteModelResultsHistory(req, res, next){
    try {
      console.log("Get Model Results History");
      const resultsRetrieval = await UserService.getDiabeteModelResultsHistory();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
      return;
    }
  }

  static async apiGetHeartModelResults(req, res, next) {
    try {
      console.log("Get Model Results");
      const resultsRetrieval = await UserService.getHeartModelResults();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetHeartModelResultsHistory(req, res, next){
    try {
      console.log("Get Model Results History");
      const resultsRetrieval = await UserService.getHeartModelResultsHistory();
      if (!resultsRetrieval) {
        res.status(404).json("Not found");
        return;
      }
      res.json(resultsRetrieval);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
      return;
    }
  }
}
