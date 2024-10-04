import React, { useContext } from "react";
import { ItemsContext } from "../App";

export default function Form() {
	const formStyle = {
		display: "flex",
		gap: "1rem",
	};

	const context = useContext(ItemsContext);
	if (!context) {
		throw new Error("useItemsContext must be used within a ItemsProvider");
	}
	const { itemsList, setItemsList, item, setItem } = context;
	console.log(`item: ${JSON.stringify(item)} itemsList: ${itemsList}`);

	const addItem = (e: React.MouseEvent) => {
		e.preventDefault();
		setItemsList([...itemsList, item]);
		setItem({ quantity: "1", name: "" });
	};

	return (
		// <ItemsContext.Provider value={itemsList}>
		<div className="add-form">
			<h3>What do you need for your trip?</h3>
			<form style={formStyle}>
				<label htmlFor="quantity-select" />
				<select
					name="quantity"
					id="quantity-select"
					onChange={(e) => setItem({ ...item, quantity: e.target.value })}
					value={item.quantity}
				>
					{[...Array(20)].map((_, i) => (
						<option key={i} value={i + 1}>
							{i + 1}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Add an item"
					onChange={(e) => setItem({ ...item, name: e.target.value })}
					value={item.name}
				/>
				<button onClick={addItem}>ADD</button>
			</form>
		</div>
		// </ItemsContext.Provider>
	);
}
