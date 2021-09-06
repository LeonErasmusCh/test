const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			detallePersonaje: {}
		},

		actions: {
			fetchPersonajes: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ personajes: result.results });
						console.log("TODOS LOS PERSONAJES", store.personajes);
					})
					.catch(error => console.log("error", error));
			},
			fetchPersonaDetalle: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detallePersonaje: result.result.properties });
						console.log("detallePersonaje", store.detallePersonaje);
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
