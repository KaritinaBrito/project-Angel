"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.createUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "getUsers"
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUser single",
        id: id
    });
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteUser single",
        id: id
    });
};
exports.deleteUser = deleteUser;
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "createUser single",
        body: body
    });
};
exports.createUser = createUser;
const putUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putUser single",
        body: body,
        id: id
    });
};
exports.putUser = putUser;
