import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaPersonajes = () => {
	const { store, actions } = useContext(Context);
	const { personaid } = useParams();

	useEffect(() => {
		actions.fetchPersonaDetalle(personaid);
	}, []);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.detallePersonaje.name}</h1>
			<h1 className="text-white">Genero: {store.detallePersonaje.gender}</h1>
		</div>
	);
};
