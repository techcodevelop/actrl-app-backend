"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersons = exports.getPerson = void 0;
const connection_1 = require("../db/connection");
const getPerson = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    // capturamos las info del body
    const { dni } = req.body;
    // Validamos si el usuario ya existe en la bd
    const rows = yield connection_1.pool.query("select * from persons where dni=?", [dni]);
    // si el resultado es 0, el usuario no se encuentra registrado
    if (rows[0].length <= 0) {
        return resp.status(400).json({
            msg: `Visitante con dni: ${dni}, no se encuentra registrado!! `
        });
    }
    resp.json(rows[0][0]);
});
exports.getPerson = getPerson;
const getPersons = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("llegoa  entrar a getPerosns");
    try {
        const [rows] = yield connection_1.pool.query("select * from persons");
        resp.json(rows);
        console.log("entro a la consulta");
    }
    catch (error) {
        return resp.status(500).json({
            message: "Something goes wrong",
        });
    }
});
exports.getPersons = getPersons;
