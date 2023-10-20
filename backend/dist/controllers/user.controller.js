"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.createUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getUsers = (req, res) => {
    connection_1.default.query('SELECT * FROM user', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM user WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM user WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "The user was deleted successfully"
        });
    });
};
exports.deleteUser = deleteUser;
const createUser = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO user set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "THE USER WAS CORRECTLY CREATED"
        });
    });
};
exports.createUser = createUser;
const putUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE user set ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "THE USER WAS UPDATED CORRECTLY"
        });
    });
};
exports.putUser = putUser;
