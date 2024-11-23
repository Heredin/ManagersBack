import { Router } from 'express';
import { deleteManager, getManager, getManagers, postManager, updateManager } from '../controllers/manager';

const router = Router();

router.get('/', getManagers);
router.get('/:id', getManager);
router.delete('/:id', deleteManager);
router.post('/', postManager);
router.put('/:id', updateManager);

export default router;