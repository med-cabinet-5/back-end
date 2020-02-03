const db = require('../database/dbConfig');

const getAll = () => {
    return db('users');
};

function findBy(filter) {
    return db('users').where(filter);
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes, '*');
};

function remove(id) {
    return db('users')
        .delete()
        .where({ id });
};

async function add(user) {
    const [id] = await db('users').insert(user);
  
    return findById(id);
};

module.exports = {
    getAll,
    findBy,
    findById,
    update,
    remove,
    add
};