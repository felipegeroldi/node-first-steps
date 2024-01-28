var knex = require('knex');

var db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root123@!',
        database: 'tasks-project'
    }
});

module.exports = db;