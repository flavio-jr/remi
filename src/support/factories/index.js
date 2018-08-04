import Http from '@/support/api/Http'
import axios from 'axios'
import Rest from '@/support/api/Rest'
import MenuService from '@/domains/menu/Service'
import MenuEntity from '@/domains/menu/Entity'

export default {
  get: (key, f) => f[key](f),

  'http': () => Http(axios),
  'rest': f => Rest(f.get('http', f)),
  'menuEntity': () => MenuEntity,
  'menuService': f => MenuService(f.get('rest', f), f.get('menuEntity', f))
}
