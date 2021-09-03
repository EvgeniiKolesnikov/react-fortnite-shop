import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const {alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    
    return () => {
      clearTimeout(timerId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} is added to the basket</div>
    </div>
  );
};

export default Alert;
