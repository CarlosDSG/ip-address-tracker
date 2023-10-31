const fetch = require('node-fetch');
const { Response } = require('@netlify/functions');

exports.handler = async (event) => {
	try {
		const apiResponse = await fetch(
			`http://api.ipstack.com/${event.queryStringParameters.ip}?access_key=061de896653a2cbfc3a0d29864d4ea9a`
		);
		const apiData = await apiResponse.json();

		const { region_code, latitude, longitude, zip } = apiData;

		const response = new Response(
			JSON.stringify({
				regionCode: region_code,
				latitude,
				longitude,
				postal: zip,
			}),
			{
				headers: {
					'Access-Control-Allow-Origin': '*', // Configura esto según tus necesidades
					'Access-Control-Allow-Methods': 'GET',
				},
			}
		);

		return response;
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Ocurrió un error al procesar la solicitud.' }),
		};
	}
};
