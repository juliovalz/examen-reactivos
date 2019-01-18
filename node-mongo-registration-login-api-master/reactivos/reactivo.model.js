const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    area: { type: String, required: true },
    nivel_educativo: { type: String, required: true },
    eje_tematico: { type: String, required: true },
    tema: { type: String, required: true },
    subtema: { type: String, required: true },
    categoria: { type: String }
   
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Reactivo', schema);