import { Router } from 'express';
const router = Router();

import * as PersonaCtr from '../controllers/persona.controller'
const { checkToken } = require('../oauth/token_validation');

router.get('/' ,  PersonaCtr.readAllPersona);
router.delete('/delete/:id' ,PersonaCtr.delPersona);
router.post('/add',PersonaCtr.createPersona );

export default router;