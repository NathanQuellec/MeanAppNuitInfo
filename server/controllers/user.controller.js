import UserService from '../services/user.service.js'

export default class UserController {
    
    constructor(){}
    
    static async processUserInformation(req, res, next){
        try{
            console.log('Processing User Information');
            const test = await UserService.getMessageFromFlask();
            console.log(test);
            res.json(test);
            if(!test){
                res.status(404).json("No response");
            } 
        } catch (error) {
            res.status(500).json({error: error});
        }
       
    }
}