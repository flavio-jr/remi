import Http from '@/support/api/Http'
import axios from 'axios'
import Rest from '@/support/api/Rest'
import MenuService from '@/domains/menu/Service'
import CategoriesService from '@/domains/categories/Service'
import OrderService from '@/domains/order/Service'

export default {
  get: (key) => this.a[key](this.a),

  'http': () => Http(axios),
  'rest': f => Rest(f.get('http')),
  'menuService': f => MenuService(f.get('rest')),
  'categoriesService': f => CategoriesService(f.get('rest')),
  'ordersService': f => OrderService(f.get('rest'))
}
