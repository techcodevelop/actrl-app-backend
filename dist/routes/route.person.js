"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_person_1 = require("../controllers/controller.person");
const router = (0, express_1.Router)();
router.get('/', controller_person_1.getPersons);
router.post('/dni', controller_person_1.getPerson);
console.log('entro al router');
exports.default = router;
