import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const CardPersonaje = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.personajes.map((personaje, posicion) => {
				return (
					<div className=" col-8 col-sm-6 col-md-4 col-lg-3" key={posicion}>
						<div className="card m-1" style={{ height: "130px" }}>
							<div className="card-body">
								<h5 className="card-title">{personaje.name}</h5>

								<Link to={"./persona/" + personaje.uid}>
									<a href="#" className="btn btn-info text-dark">
										Read more
									</a>
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

CardPersonaje.propstypes = {
	name: PropsTypes.string
};
