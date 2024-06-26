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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_person_1 = __importDefault(require("./routes/route.person"));
const config_1 = require("./config");
class Server {
    //La interfaz Application representa una aplicación Express. 
    //Puedes usar esta interfaz para configurar y ejecutar tu aplicación Express, 
    //así como para acceder a todas las funcionalidades proporcionadas por Express.
    constructor() {
        this.app = (0, express_1.default)();
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(config_1.PORT, () => {
            console.log('Aplication corriendo en el puerto ' + config_1.PORT);
        });
    }
    routes() {
        //this.app.use('/api/products', routesProduct)
        this.app.use('/api/persons', route_person_1.default);
        //   this.app.use('/api/products', routesProduct)
    }
    midlewares() {
        //Este middleware se utiliza para analizar el cuerpo de las solicitudes entrantes con el formato JSON. 
        //Cuando tu servidor Express recibe una solicitud con el encabezado 
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        //
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entro a la conxion de bd");
            try {
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to conneect to the database:', error);
            }
        });
    }
}
exports.default = Server;
