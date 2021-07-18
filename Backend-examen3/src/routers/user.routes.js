import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'
const { checkToken } = require('../oauth/token_validation');

router.get('/' ,  userCtr.readAllUsers);
router.get('/:id' , userCtr.readUser);
router.delete('/delete/:id' , userCtr.delUser);
router.post('/add', userCtr.createUser);
router.put('/:id' ,checkToken, userCtr.updateUser);
export default router;