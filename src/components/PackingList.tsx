import { useContext } from "react";
import { ItemsContext } from "../App";
import Item from "./Item";

export default function PackingList() {
	const context = useContext(ItemsContext);
	const { itemsList } = context!;
	// console.log(itemsList);

	//TODO: implement sorting by quantity, name, and completed

	return (
		<div className="list">
			<ul>
				{itemsList.map((item, index) => (
					<Item key={index} index={index} item={item} />
				))}
			</ul>
		</div>
	);
}
