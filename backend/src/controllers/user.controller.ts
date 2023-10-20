import { Request, Response } from "express";
import connection from "../db/connection";

export const getUsers = (req: Request, res: Response) => {
    connection.query('SELECT * FROM user', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    connection.query('SELECT * FROM user WHERE id = ?',id, (err, data) => {
        if(err) throw err;
        res.json(data[0])
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM user WHERE id = ?', id, (err, data) => {
        if(err) throw err;
        res.json({
            msg: "The user was deleted successfully"
        })
    })
}

export const createUser = (req: Request, res: Response) => {
    const { body } = req;
    connection.query('INSERT INTO user set ?', [body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "THE USER WAS CORRECTLY CREATED"
        })
    })
}

export const putUser = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    
    connection.query('UPDATE user set ? WHERE id = ?', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "THE USER WAS UPDATED CORRECTLY"
        })
    })
}