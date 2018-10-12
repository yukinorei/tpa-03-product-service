const { getProducts, getTotalPrice } = require('./product.js');

const getProductsObj = function(req, res) {
  const productObj = { products: getProducts() };
  res.json(productObj);
};

const getTotalPriceHandler = function(req, res) {
  const getIds = req.query.ids;
  const getIdsArray = getIds.split(',');
  const getPrice = getTotalPrice(getIdsArray);
  const productObj = {
    productIds: getIdsArray,
    total: getPrice,
  };
  res.json(productObj);
};

module.exports = {
  getProductsObj,
  getTotalPriceHandler,
};
