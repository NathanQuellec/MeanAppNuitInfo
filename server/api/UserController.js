import axios from 'axios';

export const UserController = app => {

    app.get('/hello', function (req, res) {
        res.send({ "Express": "Back-end component works !" })
    })

    app.get('/forms', function (req, res) {
        axios.get("http://flask:5000/")
            .then(flask_resp => {
                console.log(`statusCode: ${flask_resp.status}`);
                console.log(flask_resp);
                res.send(flask_resp.data);
            })
            .catch(error => {
                console.error(error)
            });
    });
}