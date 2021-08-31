const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {name} {price} ₽{' '}
      <i
        className='material-icons basket-quantity tiny'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className='material-icons basket-quantity tiny'
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price * quantity} ₽
      <span
        className='secondary-content'
        onClick={removeFromBasket.bind(this, id)}
      >
        {/* <span className='secondary-content' onClick={() => removeFromBasket(id)}> */}
        <i className='material-icons basket-delete '>close</i>
      </span>
    </li>
  );
};

export default BasketItem;
