import { Request, Response } from 'express'
import { pool } from "../db/connection"



export const getPerson = async (req: Request, resp: Response) => {

    // capturamos las info del body
    const { dni } = req.body

    // Validamos si el usuario ya existe en la bd
    const rows: any = await pool.query("select * from persons where dni=?", [dni]);

    // si el resultado es 0, el usuario no se encuentra registrado
    if (rows[0].length <= 0) {
        return resp.status(400).json({
            msg: `Visitante con dni: ${dni}, no se encuentra registrado!! `
        })
    }

    resp.json(rows[0][0]);


};

export const getPersons = async (req: Request, resp: Response) => {
    console.log("llegoa  entrar a getPerosns")
    try {
      const [rows] = await pool.query("select * from persons");
      resp.json(rows);
      console.log("entro a la consulta")
    } catch (error) {
      return resp.status(500).json({
        message: "Something goes wrong",
      });
    }
  };
  