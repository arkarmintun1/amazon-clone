import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order total: {value}</h3>}
        decimalScale={2}
        value={getBasketTotal(order.data.basket)}
        displayType={'text'}
        thousandSepertor={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
