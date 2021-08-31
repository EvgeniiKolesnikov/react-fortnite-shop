import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item, 
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder)
    }

  }
  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
    .then(response => response.json())
    .then(data => {
      data.featured && setGoods(data.featured);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? (<Preloader />) : <GoodsList goods={goods} addToBasket={addToBasket} /> }
    </main>
  )
};

export default Shop;
