import { useEffect, useState } from "react";
import Headlink from "../../components/Headlink/Headlink";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interfaces";
import styles from "./Menu.module.css";
import axios from "axios";

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  const getMenu = async () => {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  });

  return (
    <>
      <div className={styles["head"]}>
        <Headlink>Mеню</Headlink>
        <Search placeholder="Введите блюдо или состав" isValid={false} />
      </div>
      <div>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            descriptions={p.ingredients.join(", ")}
            image={p.image}
            price={p.price}
            rating={p.rating}
          />
        ))}
      </div>
    </>
  );
}
