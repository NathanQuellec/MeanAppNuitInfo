import { UserRoutes } from './user.routes.js';
import { TestRoutes } from './test.routes.js';

export const configureRoutes = app => {
    UserRoutes(app);
    TestRoutes(app);
    return app;
}