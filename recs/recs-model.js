const db = require('../database/dbConfig');

function add(rec) {
    return db('recommendations')
        .insert(rec)
        .returning('*');
}

function find() {
    return db('recommendations')
        .select('user_id', 'strain_id');
}

function findByUserId(id) {
    return db('recommendations')
        .select('user_id', 'strain_id')
        .where({ user_id: id });
}

function remove(user_id, strain_id) {
    return db('recommendations')
        .delete()
        .where({ user_id, strain_id });
}

module.exports = {
    add,
    find,
    findByUserId,
    remove
};