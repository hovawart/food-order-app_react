import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        { id: "c1", name: "Sushi", amount: 2, pirce: 12.99 }.map(
          (item = <li>{item.name}</li>)
        ),
      ]}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classses["button--alt"]}>Close</button>
        <button className={classses.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;