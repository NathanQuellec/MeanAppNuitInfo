import axios from 'axios';

export default class UserService {

    constructor() { }

    static async getMessageFromFlask() {
        try {
            return await axios.get("http://flask:5000/")
                .then(flask_resp => {
                    console.log(`statusCode: ${flask_resp.status}`);
                    console.log(flask_resp.data);
                    return flask_resp.data;
                });
        } catch (error) {
            console.log(`Error :  ${error}`);
        }
    }
}