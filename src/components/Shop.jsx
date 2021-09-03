import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import { ShopContext } from '../context';

const Shop = () => {
  const {loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext);
  // const [goods, setGoods] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState([]);
  // const [isBasketShow, setIsBasketShow] = useState(false);
  // const [alertName, setAlertName] = useState('');

  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item, 
  //       quantity: 1,
  //     }
  //     setOrder([...order, newItem])
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         }
  //       } else {
  //         return orderItem;
  //       }
  //     })
  //     setOrder(newOrder)
  //   }
  //   setAlertName(item.name);
  // }

  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter(el => el.id !== itemId);
  //   setOrder(newOrder);
  // }

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map(el => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  // const decQuantity = (itemId) => {
  //   const newOrder = order.map(el => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >=0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  // const handleBasketShow = () => {
  //   setIsBasketShow(!isBasketShow);
  // }

  // const closeAlert = () => {
  //   setAlertName('');
  // }

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
    .then(response => response.json())
    .then(data => {
      setGoods(data.featured);
    })
    .catch(error => {
      console.log(error);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? (<Preloader />) : <GoodsList /> }
      {isBasketShow && <BasketList />}
      {
        alertName && <Alert />
      }
    </main>
  )
};

export default Shop;
