/**
 * Order entity
 * @param {*} id The order id
 * @param {Array} items The order items ids
 * @returns {Object}
 */
export default ({ id, items, status = 'P' }) => ({
  id: id,
  items: items,
  status: status
})