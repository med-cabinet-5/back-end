const bcrypt = require('bcryptjs');

exports.seed = knex => {
  return knex('users')
    .insert([
      {
        first_name: 'Lexie',
        last_name: 'Jiang',
        username: 'vvitch',
        email: 'lexie@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Vinni',
        last_name: 'Hoke',
        username: 'vinnihoke',
        email: 'vinni@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Danika',
        last_name: 'Thomson',
        username: 'danikathom',
        email: 'danika@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'David',
        last_name: 'Vollendroff',
        username: 'davidvoll',
        email: 'david@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Jan',
        last_name: 'Jaap de Jong',
        username: 'janjaap',
        email: 'jan@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'KP',
        last_name: 'Parrish',
        username: 'kparrish',
        email: 'kp@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Kennith',
        last_name: 'Howe',
        username: 'kennithhowe',
        email: 'kennith@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Mikio',
        last_name: 'Harmon',
        username: 'mikiohar',
        email: 'mikio@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Stephen',
        last_name: 'Gary',
        username: 'stepheng',
        email: 'stephen@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Nicole',
        last_name: 'Williams',
        username: 'nicolewill',
        email: 'nicole@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
      {
        first_name: 'Leslie',
        last_name: 'Thompson',
        username: 'lesliet',
        email: 'leslie@medcab.com',
        password: bcrypt.hashSync('snoopdogg', 12)
      },
    ])
}