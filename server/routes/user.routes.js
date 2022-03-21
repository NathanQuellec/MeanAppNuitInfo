import UserController from "../controllers/user.controller.js";

export const UserRoutes = app => {

    app.get('/hello', function (req, res) {
        res.send({ "Express": "Back-end component works !" })
    });

    app.get('/flask', UserController.flaks_test);

    app.post('/users', UserController.apiRegisterUserInformation);

    app.get('/users', UserController.apiGetUserInformation);
};