import React from 'react'
import './Order.scss'

const presentationalOrder = (order, menu) =>
  order.map(orderItem => ({
    ...menu.find(item => item.id === orderItem.id),
    amount: orderItem.amount
  }))

const Order = ({ order, menu, showModal, onClose, onRemoveItem, onAmountChange }) =>
  <div className={`modal ${showModal ? 'is-active': ''}`}>
    <div className="modal-background" onClick={() => onClose()}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Your order</p>
        <button className="delete" onClick={() => onClose()}></button>
      </header>
      <div className="modal-card-body">
        <div className="order-list">
          {
            presentationalOrder(order, menu)
              .map(orderItem => (
                <div className="order-item columns" key={orderItem.id}>
                  <div className="column is-8">
                    <i
                      className="fa fa-times-circle clickable"
                      onClick={() => onRemoveItem(orderItem.id)}
                    >
                    </i>
                    <span className="has-text-weight-light">  {orderItem.name}</span>
                  </div>
                  <div className="column">
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className=" is-size-7 label">Amount</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <input
                              className="input"
                              type="number"
                              value={orderItem.amount}
                              onChange={(e) => onAmountChange(orderItem.id, e.target.value)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
    <button className="modal-close is-large" aria-label="close"></button>
  </div>

export default Order