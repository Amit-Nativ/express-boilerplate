import { AsyncRouter } from 'express-async-router'

import { get } from './model.controller'

const router = AsyncRouter();

router.get('/', get);

export default router;