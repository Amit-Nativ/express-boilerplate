import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import { urlencoded, json } from 'body-parser';

import routes from './routes'

export default () => {
    const app = express();

    app.use(helmet())
    app.use(compression());
    app.use(urlencoded({ extended: false }));
    app.use(json());

    app.use('/api', routes)

    return app;
}