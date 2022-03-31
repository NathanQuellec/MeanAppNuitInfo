import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

export const configureServer = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use(morgan());
  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};
