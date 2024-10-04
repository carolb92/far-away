import React, { useContext } from "react";
import { ItemsContext } from "../App";

type ItemProps = {
	index: number;
	item: { quantity: string; name: string };
};

export default function Item({ index, item }: ItemProps) {
	const context = useContext(ItemsContext);
	const { itemsList, setItemsList } = context!;

	const handleDelete = (index: number) => {
		// e.preventDefault();
		const newList = itemsList.filter((_, i) => i !== index);
		setItemsList(newList);
	};
	return (
		<li key={index}>
			<input type="checkbox" name={`item-${index}`} id={`item-${index}`} />
			<label htmlFor={`item-${index}`}>
				{item.quantity} {item.name}
			</label>
			<button onClick={(e) => handleDelete(index)}>delete</button>
		</li>
	);
}
