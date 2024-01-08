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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMenu = async () => {
    try {
      setIsLoading(true)
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false)
    } catch (e) {
      console.error(e);
      setIsLoading(false)
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
        {isLoading &&
          products.map((p) => (
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
        {isLoading && <>Загружаем продукты ....</>}
      </div>
    </>
  );
}
