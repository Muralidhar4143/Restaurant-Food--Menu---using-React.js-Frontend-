import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
	...new Set(
		Menu.map((curElem) => {
			return curElem.category;
		})
	),
	"All",
];
console.log(uniqueList);

const Resturant = () => {
	const [menu, setMenu] = useState(Menu);
	const [list] = useState(uniqueList);

	const filterItem = (category) => {
		if (category === "All") {
			setMenu(Menu);
			return;
		}

		const updatedList = Menu.filter((curElem) => {
			return curElem.category === category;
		});
		setMenu(updatedList);
	};

	return (
		<>
			<Navbar filterItem={filterItem} list={list} />
			<MenuCard menu={menu} />
		</>
	);
};

export default Resturant;
