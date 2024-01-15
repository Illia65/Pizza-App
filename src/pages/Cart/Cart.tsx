import { useSelector } from 'react-redux';
import Headlink from '../../components/Headlink/Headlink';
import { RootState } from '../../store/store';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interfaces';
import CardItem from '../../components/Cartitem/CartItem';


export function Cart() {
	const [cartProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCardProducts(res);
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return <>
		<Headlink>Корзина</Headlink>
		{items.map(i => {
			const product = cartProducts.find(p => p.id === i.id);
			if (!product) {
				return;
			}
			return <CardItem descriptions={''} count={i.count} {...product} />;
		})}
	</>;
}