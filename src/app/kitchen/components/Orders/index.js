import React from 'react'
import OrderItem from '@/app/kitchen/components/OrderItem'

const findMenuOption = (id, menu) => menu.find(item => item.id === id)

const Items = (order, menu) =>
  order
    .items
    .map(orderItem => ({
      ...orderItem,
      ...findMenuOption(orderItem.id, menu)
    }))


const Order = ({ orders, menu, onOrderChange }) =>
  (!!menu.length && !!orders.length) ?
    (
      <div className="columns is-multiline">
        {
          orders.map(
            (order, idx) => (
              <div className="column is-3" key={idx}>
                <OrderItem
                  order={order}
                  items={Items(order, menu)}
                  onChangeStatus={status => onOrderChange(order.id, status)}
                />
              </div>
            )
          )
        }
      </div>
    ) : null

export default Order