import { Router } from "express";
import {getPerson, getPersons} from '../controllers/controller.person'

const router = Router();

router.get('/', getPersons);
router.post('/dni', getPerson);

console.log('entro al router')

export default router;