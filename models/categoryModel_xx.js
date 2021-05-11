const db = require('../utils/database');

const Prod3c_09 = class Prod3c_09 {
    constructor(id, name, size, remote_url, local_url) {
       this.id = id;
       this.pname = pname;
       this.company = company;
       this.unit_price = unit_price;
       this.quantity = quantity;
       this.soldout = soldout;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from prod3c_09');
    }

}

module.exports = Prod3c_09;