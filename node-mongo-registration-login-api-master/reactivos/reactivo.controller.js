const express = require('express');
const router = express.Router();
const reactivoService = require('./reactivo.service');

// routes
router.post('/', crear);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);


module.exports = router;


function crear(req, res, next) {
    reactivoService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    reactivoService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    reactivoService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    reactivoService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    reactivoService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

