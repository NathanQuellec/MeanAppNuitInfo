import axios from "axios";
import { avcResults } from "../models/disease-avc-results.js";
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
      console.log(`test ${array}`);
      const response = await axios.post("http://flask:5000/strokes/test", {
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
      const mongoResponse = await new avcResults(newAVCResults).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async getAVCModelResults() {
    try {
      const results = await avcResults.find();
      return results;
    } catch (error) {
      console.log(error);
    }
  }
}
