import React, { Component } from 'react'
import { STATUS_PRESETS, ORDER_STATUS } from '@/domains/order/enum'
import './OrderItem.scss'

const totalPrice = items => items.reduce( (acc, item) => acc + item.price, 0 )

class OrderItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDetails: false
    }
  }

  render () {
    const { order, items } = this.props

    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p className="title is-4">
              # { order.id }
              <p className="subtitle is-5 is-pulled-right">
                R$ { totalPrice(items) }
              </p>
            </p>
            <a
              className="subtitle is-6"
              onClick={ () => this.setState({ showDetails: !this.state.showDetails }) }
            >
              <i className={`fa fa-caret-${ this.state.showDetails ? 'down' : 'right' }`}></i> Items
            </a>
            {
              this.state.showDetails &&
              (
                <ul>
                  {
                    items.map( (item ,idx) => <li key={idx}>{ item.name } ({ item.amount })</li> )
                  }
                </ul>
              )
            }
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item status">
            <p className={`${STATUS_PRESETS[order.status].text} is-inline-block`}>
              { ORDER_STATUS[order.status] }
            </p>
          </div>
          <div className="card-footer-item btn-status">
            <button
              className={`button is-small is-inline-block is-pulled-right ${STATUS_PRESETS[order.status].button}`}
            >
              { STATUS_PRESETS[order.status].buttonText }
            </button>
          </div>
        </footer>
      </div>
    )
  }
}

export default OrderItem