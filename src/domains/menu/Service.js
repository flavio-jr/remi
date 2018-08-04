export default (rest, MenuEntity) => rest('menu', {
  setEntityList: menu => menu.map(item => MenuEntity(item)),
  setEntity: item => MenuEntity(item)
})