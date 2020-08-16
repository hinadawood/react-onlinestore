const { getCatalogData } = require('../service/catalogService.js')

const getCatalog = () => {
  var catalog = getCatalogData();
  return catalog;
}

module.exports = { getCatalog }
