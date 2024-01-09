import { Await, useLoaderData } from "react-router-dom";
import {
  Product as ProductComponent,
  Product as ProductInterface,
} from "../../interfaces/product.interfaces";
import { Suspense } from "react";

export function Product() {
  const data = useLoaderData() as { data: ProductInterface };

  return (
    <Suspense fallback="Загрузка...">
      <Await resolve={data.data}>
        {({ data }: { data: ProductInterface }) => <>Product - {data.name}</>}
      </Await>
    </Suspense>
  );
}
