import express, { Application } from "express";
import cors from 'cors'
import routesPersons from './routes/route.person'

import { PORT } from "./config";

class Server {

    private app: Application

    //La interfaz Application representa una aplicación Express. 
    //Puedes usar esta interfaz para configurar y ejecutar tu aplicación Express, 
    //así como para acceder a todas las funcionalidades proporcionadas por Express.
    constructor() {
        this.app = express()
        this.listen()
        this.midlewares()
        this.routes()
        this.dbConnect()
    }

    listen() {  // Inicia el servidor
        this.app.listen(PORT, () => {
            console.log('Aplication corriendo en el puerto ' + PORT)
        })
    }

    routes() {
        //this.app.use('/api/products', routesProduct)
        this.app.use('/api/persons', routesPersons)
        //   this.app.use('/api/products', routesProduct)
    }

    midlewares() {
        //Este middleware se utiliza para analizar el cuerpo de las solicitudes entrantes con el formato JSON. 
        //Cuando tu servidor Express recibe una solicitud con el encabezado 
        this.app.use(express.json());

        this.app.use(cors( ));
        //

    }

    async dbConnect() {

        console.log("entro a la conxion de bd")
        try {
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.error('Unable to conneect to the database:', error)
        }
    }
}
export default Server;