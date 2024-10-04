import { useState, createContext } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

export type Item = {
	quantity: string;
	name: string;
};

type ItemsContextType = {
	itemsList: Item[];
	setItemsList: React.Dispatch<React.SetStateAction<Item[]>>;
	item: Item;
	setItem: React.Dispatch<React.SetStateAction<Item>>;
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

function App() {
	const [itemsList, setItemsList] = useState<Item[]>([]);
	const [item, setItem] = useState<Item>({
		quantity: "1",
		name: "",
	});

	return (
		<ItemsContext.Provider value={{ itemsList, setItemsList, item, setItem }}>
			{/* <div> */}
			<Logo />
			<Form />
			<PackingList />
			{/* </div> */}
		</ItemsContext.Provider>
	);
}

export default App;
