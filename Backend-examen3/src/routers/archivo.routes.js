import { Router } from 'express';
const router = Router();

import * as ArchiCtr from '../controllers/archivos.controller'
const { checkToken } = require('../oauth/token_validation');

router.get('/' ,  ArchiCtr.readAllArchivos);
router.delete('/delete/:id' ,ArchiCtr.delArchi);
router.post('/add',ArchiCtr.createArchivo );

export default router;