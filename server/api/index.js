import { routesTest } from './routesTest.js';

export const configureRoutes = app => {
    routesTest(app);
    return app;
}