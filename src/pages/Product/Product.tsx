import { useLoaderData } from "react-router-dom";
import { Product as ProductInterface } from "../../interfaces/product.interfaces";

export function Product() {
  const data = useLoaderData() as ProductInterface;
  return <>Product - {data.name}</>;
}
