// Importa la biblioteca 'node-fetch' para realizar solicitudes HTTP
const fetch = require('node-fetch');

// Función para redirigir la solicitud
exports.handler = async (event) => {
	try {
		// URL de la API original (HTTP)
		const originalApiUrl = 'http://api.ipstack.com' + event.path;

		// Construye una URL segura (HTTPS) a partir de la URL original
		const secureApiUrl = 'https://api.ipstack.com' + event.path;

		// Realiza una solicitud GET a la URL segura
		const response = await fetch(secureApiUrl);

		// Obtiene los datos de la respuesta
		const data = await response.json();

		// Devuelve la respuesta al cliente
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Ocurrió un error al procesar la solicitud.' }),
		};
	}
};
