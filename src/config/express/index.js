import express from 'express'

import routes from './routes'

export default () => {
    const app = express();

    routes(app);

    return app;
}