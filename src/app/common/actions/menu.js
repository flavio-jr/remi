export const fetchMenu = () => ({
  type: 'FETCH_MENU'
})

export const fetchMenuSuccess = menu => ({
  type: 'FETCH_MENU_SUCCESS',
  menu: menu
})

export const fetchMenuItems = MenuService =>
  (dispatch) => {
    dispatch(fetchMenu())

    return MenuService
      .list()
      .then(menu => dispatch(fetchMenuSuccess(menu)))
  }