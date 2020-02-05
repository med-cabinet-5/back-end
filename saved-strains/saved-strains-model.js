const db = require('../database/dbConfig');

const find = () => {
    return db('savedstrains');
};

const findBy = property => {
    return db('savedstrains')
        .where(property)
};

function add(strain) {
    return db('savedstrains').insert(strain).returning('*');
};

function remove(id) {
    return db('savedstrains')
        .delete()
        .where({ id });
};

module.exports = {
    find,
    findBy,
    add,
    remove
};