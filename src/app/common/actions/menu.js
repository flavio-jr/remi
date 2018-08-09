import { isFetching, doneFetching } from './fetch'

export const fetchMenuSuccess = menu => ({
  type: 'FETCH_MENU_SUCCESS',
  menu: menu
})

export const fetchMenuItems = MenuService =>
  (dispatch) => {
    dispatch(isFetching())

    return MenuService
      .list()
      .then(menu => {
        dispatch(doneFetching())

        return dispatch(fetchMenuSuccess(menu))
      })
  }