// const MySqli = require('mysqli');
import MySqli from 'mysqli';

let conn = new MySqli({
    host:'localhost',
    post:3306,
    user:'root',
    pass:'',
    db:'mega_shop'
});

let db = conn.emit(false,'');

module.exports = {
    database: db
};

