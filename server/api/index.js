import { UserController } from './UserController.js';

export const configureRoutes = app => {
    UserController(app);
    return app;
}