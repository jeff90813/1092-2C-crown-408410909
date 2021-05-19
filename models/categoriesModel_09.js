const db = require('../utils/database');

const Categories = class Categories {
    constructor(id, name, price, remote_url, local_url) {
       this.id = id;
       this.name = name;
       this.price = price;
       this.remote_url = remote_url;
       this.local_url = local_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from category_09');
    }


}

module.exports = Categories;