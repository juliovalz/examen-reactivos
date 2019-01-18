const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Reactivo = db.Reactivo;

module.exports = {
    getAll,
    getById,
    update,
    create
};


async function getAll() {
    return await Reactivo.find().select('-hash');
}

async function getById(id) {
    return await Reactivo.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    const reactivo = new Reactivo(userParam);
    // save user
    await reactivo.save();
}

async function update(id, userParam) {
    const reactivo = await Reactivo.findById(id);
    // copy userParam properties to user
    Object.assign(reactivo, userParam);

    await reactivo.save();
}