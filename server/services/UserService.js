import events from 'events';

export default class UserService {
    constructor(){
        let eventEmitter = events.EventEmitter();
    }
    async processUserInformation(user){
           eventEmitter.emit('procUserInf', user.data);
    }
}