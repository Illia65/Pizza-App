// import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import styles from "./CartItem.module.css"
import {CardItemProps} from "./CartItem.props"

const CardItem = (props: CardItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.add(props.id));
  };
  const remove = () => {
    dispatch(cartActions.add(props.id));
  };

  return (
    <div className={styles["item"]}>
      <div className={styles["image"]}></div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{props.name}</div>
        <div className={styles["currency"]}> {props.price}&nbsp;₽</div>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button"]} onClick={increase}>
          <img src="/cart-icon.svg" alt="add to cart" />
        </button>
        <div>{props.count}</div>
        <button className={styles["button"]} onClick={decrease}>
          <img src="/cart-icon.svg" alt="remove" />
        </button>
        <button className={styles["remove"]} onClick={remove}>
          <img src="/cart-icon.svg" alt="remove all" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
