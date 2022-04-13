import { UserRoutes } from './user.routes.js';

export const configureRoutes = app => {
    UserRoutes(app);
    return app;
}