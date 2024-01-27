var knex = require('knex');

var db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        database: 'musics',
        password: 'root123@!'
    }
});

module.exports = db;