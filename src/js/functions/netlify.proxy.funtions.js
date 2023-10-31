const fetch = require('node-fetch');
const { Response } = require('@netlify/functions');

exports.handler = async (event) => {
	try {
		// Obtén la dirección IP del parámetro de consulta
		const { ip } = event.queryStringParameters;

		// Realiza la solicitud a la API de IPStack
		const apiResponse = await fetch(`http://api.ipstack.com/${ip}?access_key=061de896653a2cbfc3a0d29864d4ea9a`);
		const apiData = await apiResponse.json();

		// Configura los encabezados CORS para permitir todas las solicitudes
		const response = new Response(JSON.stringify(apiData), {
			headers: {
				'Access-Control-Allow-Origin': '*', // Esto permite todas las solicitudes
				'Access-Control-Allow-Methods': 'GET',
			},
		});

		return response;
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Ocurrió un error al procesar la solicitud.' }),
		};
	}
};
