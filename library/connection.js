const settings = {
    host: 'localhost',
    database: 'medical_app',
    user: 'root',
    password: '1234'
};
const qb = require('node-querybuilder').QueryBuilder(settings, 'mysql', 'single');
module.exports = qb;