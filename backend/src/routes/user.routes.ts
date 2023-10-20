import { Router } from 'express';
import { getUsers, getUser, deleteUser, createUser, putUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', createUser);
router.put('/:id', putUser);

export default router;