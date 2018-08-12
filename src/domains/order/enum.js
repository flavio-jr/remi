export const ORDER_STATUS = {
  'P': 'Pending',
  'W': 'Waiting',
  'C': 'Completed'
}

export const STATUS_WEIGHTS = [
  'P',
  'W',
  'C'
]

export const STATUS_PRESETS = {
  'P': {
    text: 'has-text-danger',
    button: 'is-warning',
    buttonText: 'Take it'
  },
  'W': {
    text: 'has-text-warning',
    button: 'is-success',
    buttonText: 'Mark as completed'
  },
  'C': {
    text: 'has-text-success',
    button: 'is-success'
  }
}

export const ICONS = {
  'P': 'sync-alt',

}