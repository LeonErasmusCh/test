import React, { useContext } from "react";
import { Fragment } from "react";
import "../../styles/home.scss";
import { CardPersonaje } from "../component/cardPersonaje";
import { Carrusel } from "../component/Carrusel";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{store.personajes.map((element, id) => {
				return (
					<>
						<CardPersonaje />
					</>
				);
			})}
		</div>
	);
};
