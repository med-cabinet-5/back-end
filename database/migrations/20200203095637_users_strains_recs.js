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
        .createTable('savedstrains', tbl => {
            tbl.increments('approved_id');

            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl.string('ailments');

            tbl.string('description');

            tbl.string('effects');

            tbl.string('flavor');

            tbl.string('strain');
            
            tbl.string('type');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('savedstrains')
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};

/*

The structure of the data from DS is 

"ailments"
"description"
"effects"
"flavor"
"strain"
"type"

all are strings

I do not know how the structure of the returned strain card looks like? How to link up the save button? Do I just do a simple put request and it saves the ID?

Then on react side, there's a route for saved strains list that would be a simple get request of all the strains that user has saved?

*/