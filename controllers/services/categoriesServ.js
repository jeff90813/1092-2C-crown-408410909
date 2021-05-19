const Category = require('../../models/categoriesModel_09')

exports.fetchCategories = async () => {
    try{
        const [rows] = await Category.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}