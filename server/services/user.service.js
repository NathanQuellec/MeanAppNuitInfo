import axios from "axios";
import { avcInfo } from "../models/disease-avc.js";
import { User } from "../models/user.js";
export default class UserService {
  constructor() {}

  static async getMessageFromFlask() {
    try {
      return await axios.get("http://flask:5000/").then((flask_resp) => {
        console.log(`statusCode: ${flask_resp.status}`);
        console.log(flask_resp.data);
        return flask_resp.data;
      });
    } catch (error) {
      console.error(error);
    }
  }

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

  static async getUserInformation() {
    try {
      const user = await User.find();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  static async registerAVCInformation(avcData){
    try{
      console.log(avcData);
      const newAVCInfo = {
        gender: avcData.gender,
        age: avcData.age,
        hypertension: avcData.hypertension,
        heartDisease: avcData.heartDisease,
        married: avcData.married,
        work: avcData.work,
        residence: avcData.residence,
        glucose: avcData.glucose,
        bmi: avcData.bmi
      };
      const mongoResponse = await new avcInfo(newAVCInfo).save();
      return mongoResponse;
    } catch (error) {
      console.error(error);
    }
  }
}
