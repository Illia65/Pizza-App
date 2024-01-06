import Headlink from "../../components/Headlink/Headlink";
import ProductCard from "../../components/ProductCard/Productcard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <div className={styles["head"]}>
        <Headlink>Mеню</Headlink>
        <Search placeholder="Введите блюдо или состав" isValid={false} />
      </div>
      <div>
        <ProductCard
          id={1}
          title={"Жаркое с сыром"}
          descriptions={"Картофель, сыр, перец, фарш"}
          image={"product-demo.png"}
          price={300}
          rating={4.5}
        />
      </div>
    </>
  );
}
