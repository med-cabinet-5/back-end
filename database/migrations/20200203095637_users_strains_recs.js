exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');

            tbl.string('first_name', 128)
                .notNullable();

            tbl.string('last_name', 128)
                .notNullable();

            tbl.string('username', 128)
                .notNullable()
                .unique();    

            tbl.string('email', 128)
                .unique()
                .notNullable();

            tbl.string('password', 400)
                .notNullable();

        })
        .createTable('strains', tbl => {
            tbl.increments('id');

            tbl.string('strain', 128)
                .unique()
                .notNullable();

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};