export default (rest, categoryEntity) => rest('categories', {
  setEntityList: categories => categories.map(category => categoryEntity(category)),
  setEntity: category => categoryEntity(category)
})