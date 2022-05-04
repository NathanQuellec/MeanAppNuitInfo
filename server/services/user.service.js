import axios from "axios";
import { AvcResults } from "../models/disease-avc-results.js";
import { DiabeteResults } from "../models/disease-diabete-results.js";
import { HeartResults } from "../models/disease-heart-results.js";
import { User } from "../models/user.js";
export default class UserService {
  constructor() {}

  /* static async getMessageFromFlask() {
    try {
      return await axios.get("http://flask:5000/").then((flask_resp) => {
        console.log(`statusCode: ${flask_resp.status}`);
        console.log(flask_resp.data);
        return flask_resp.data;
      });
    } catch (error) {
      console.error(error);
    }
  } */



  static async registerUserInformation(userData) {
    try {
      console.log(userData);
      const newUser = {
        name: userData.name,
        surname: userData.surname,
        age: userData.age,
      };
      const mongoResponse = await new User(newUser).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async sendAVCInformationToFlask(avcData) {
    try {
      const array = [
        avcData.gender,
        avcData.age,
        avcData.hypertension,
        avcData.heartDisease,
        avcData.married,
        avcData.work_type,
        avcData.residence,
        avcData.glucose,
        avcData.bmi,
        avcData.smoking_status,
      ];
      console.log(`Data sent to flask : ${array}`);
      const response = await axios.post("http://flask:5000/strokes/test", {
        value: array,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async sendHeartInformationToFlask(heartData) {
    try {
      const array = [
        heartData.Age,
        heartData.Sex,
        heartData.ChestPainType,
        heartData.RestingBP,
        heartData.Cholesterol,
        heartData.FastingBS,
        heartData.RestingECG,
        heartData.MaxHR,
        heartData.ExerciseAngina,
        heartData.Oldpeak,
        heartData.ST_Slope,
      ];
      console.log(`Data sent to flask : ${array}`);
      const response = await axios.post("http://flask:5000/heart/test", {
        value: array,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async sendDiabeteInformationToFlask(diabeteData) {
    try {
      const array = [
        diabeteData.HighBP,
        diabeteData.HighChol,
        diabeteData.CholCheck,
        diabeteData.BMI,
        diabeteData.Smoker,
        diabeteData.Stroke,
        diabeteData.HeartDiseaseorAttack,
        diabeteData.PhysActivity,
        diabeteData.Fruits,
        diabeteData.Veggies,
        diabeteData.HvyAlcoholConsump,
        diabeteData.AnyHealthcare,
        diabeteData.NoDocbcCost,
        diabeteData.GenHlth,
        diabeteData.MentHlth,
        diabeteData.PhysHlth,
        diabeteData.DiffWalk,
        diabeteData.Sex,
        diabeteData.Age,
        diabeteData.Education,
        diabeteData.Income,
      ];
      console.log(`Data sent to flask : ${array}`);
      const response = await axios.post("http://flask:5000/diabete/test", {
        value: array,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async registerAVCModelResultsToMongo(avcData) {
    try {
      console.log(
        `saving to mongo : ${avcData.prediction} and ${avcData.score}`
      );
      const newAVCResults = {
        prediction: avcData.prediction,
        score: avcData.score,
      };
      const mongoResponse = await new AvcResults(newAVCResults).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async registerHeartModelResultsToMongo(heartData) {
    try {
      console.log(
        `saving to mongo : ${heartData.prediction} and ${heartData.score}`
      );
      const newHeartResults = {
        prediction: heartData.prediction,
        score: heartData.score,
      };
      const mongoResponse = await new HeartResults(newHeartResults).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async registerDiabeteModelResultsToMongo(diabeteData) {
    try {
      console.log(
        `saving to mongo : ${diabeteData.prediction} and ${diabeteData.score}`
      );
      const newDiabeteResults = {
        prediction: diabeteData.prediction,
        score: diabeteData.score,
      };
      const mongoResponse = await new DiabeteResults(newDiabeteResults).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async getAVCModelResults() {
    try {
      const results = await AvcResults.findOne().sort({createdAt: -1});
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getAVCModelResultsHistory() {
    try {
      const results = await AvcResults.find().sort({createdAt: -1}).limit(5);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getDiabeteModelResults() {
    try {
      const results = await DiabeteResults.findOne().sort({createdAt: -1});
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getDiabeteModelResultsHistory() {
    try {
      const results = await DiabeteResults.find().sort({createdAt: -1}).limit(5);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getHeartModelResults() {
    try {
      const results = await HeartResults.findOne().sort({createdAt: -1});
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getHeartModelResultsHistory() {
    try {
      const results = await HeartResults.find().sort({createdAt: -1}).limit(5);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async getCardiologueAppointment(city) {
    try {
      const response = `https://www.doctolib.fr/cardiologue/${city}`
      console.log(response)
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  static async getDiabetologueAppointment(city) {
    try {
      const response = `https://www.doctolib.fr/diabetologue/${city}`
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  static async getNeurologueAppointment(city) {
    try {
      const response = `https://www.doctolib.fr/neurologue/${city}`
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}
