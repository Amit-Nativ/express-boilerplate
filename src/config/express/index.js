import express from 'express'
import compression from 'compression'
import helmet from 'helmet'

import routes from './routes'

export default () => {
    const app = express();

    app.use(helmet())
    app.use(compression());

    app.use('/api', routes)

    return app;
}