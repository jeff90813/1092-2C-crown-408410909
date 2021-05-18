const categoriesServ = require('./services/categoriesServ')

exports.getCategories = async (req, res) => {
    const data = await categoriesServ.fetchCategories()
    res.json(data);
}