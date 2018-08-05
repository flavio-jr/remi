import Http from '@/support/api/Http'
import axios from 'axios'
import Rest from '@/support/api/Rest'
import MenuService from '@/domains/menu/Service'
import MenuEntity from '@/domains/menu/Entity'
import CategoriesService from '@/domains/categories/Service'
import CategoryEntity from '@/domains/categories/Entity'

export default {
  get: (key) => this.a[key](this.a),

  'http': () => Http(axios),
  'rest': f => Rest(f.get('http')),
  'menuEntity': () => MenuEntity,
  'menuService': f => MenuService(f.get('rest'), f.get('menuEntity')),
  'categoryEntity': () => CategoryEntity,
  'categoriesService': f => CategoriesService(f.get('rest'), f.get('categoryEntity'))
}
