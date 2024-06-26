import { Router } from 'express';

import { transportsController } from '@app/controllers';
import { Validation } from '@app/middlewares';
import { Transport } from '@app/models';

const router = Router();
router.route('/types').get(transportsController.getTransportTypes);
router.route('/').post(transportsController.items);
router.route('/').post(Validation.req(Transport), transportsController.addItem);
router.route('/').delete(Validation.req(Transport), transportsController.deleteItem);

export default router;
