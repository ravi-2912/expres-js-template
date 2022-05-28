import { Router } from 'express';

import helloWorld from '@/routes/helloWorld';

const router = Router();

router.route('/').get(helloWorld);

export default router;
