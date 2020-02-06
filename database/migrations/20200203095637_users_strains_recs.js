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
                .notNullable();

            tbl.string('password', 400)
                .notNullable();

        })
        .createTable('savedstrains', tbl => {
            tbl.increments('id');

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
        .createTable('saved_strains_stores', tbl => {
            tbl.increments('id');

            tbl.integer('strain_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('savedstrains')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl.integer('store_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('stores')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('stores', tbl => {
            tbl.increments('id');

            tbl.string('title');

            tbl.string('address');

            tbl.string('phone_number');

            tbl.string('website');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('stores')
        .dropTableIfExists('saved_strains_stores')
        .dropTableIfExists('savedstrains')
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


        .createTable('recommendations', tbl => {
            tbl.datetime('created_at')
                .defaultTo(knex.fn.now())
                .notNullable();

            tbl.datetime('updated_at')
                .defaultTo(knex.fn.now())
                .notNullable();

            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('strain_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('strains')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })

        .createTable('strains', tbl => {
            tbl.increments('id');

            tbl.string('strain', 128)
                .unique()
                .notNullable();

        })

*/