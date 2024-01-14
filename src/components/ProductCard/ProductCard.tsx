import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };

  return (
    <Link to={`/product/${props.id}`} className={styles["link"]}>
      <div className={styles["card"]}>
        <div
          className={styles["head"]}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={styles["price"]}>
            {props.price}&nbsp;
            <span className={styles["currency"]}>₽</span>
          </div>
          <button className={styles["add-to-cart"]} onClick={add}>
            <img src="/cart-icon.svg" alt="add to cart" />
          </button>
          <div className={styles["rating"]}>
            {props.rating}
            <img src="/star-icon.svg" alt="icon star" />
          </div>
        </div>

        <div className={styles["footer"]}>
          <div className={styles["title"]}>{props.name}</div>
          <div className={styles["descriptions"]}>{props.descriptions}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
