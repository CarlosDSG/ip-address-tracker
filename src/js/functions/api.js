const getUserIp = async () => {
	const api = await fetch('https://api.ipify.org/?format=json');
	const data = await api.json();
	return data;
};

const API = async (ip) => {
	const api = await fetch(`https://ipinfo.io/${ip}?token=9b3fa73dd65477`);
	const data = await api.json();
	const addressData = {
		ip: data.ip,
		city: data.city,
		time: data.timezone,
		isp: data.org,
	};
	return addressData;
};
const getTimeZone = async (ip) => {
	const api = await fetch(
		`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${ip}`
	);
	const data = await api.json();
	return data.location.timezone;
};

const fetch = require('node-fetch');
const { Response } = require('@netlify/functions');

exports.handler = async (event) => {
	try {
		// Realiza la solicitud a la API de IPStack
		const apiResponse = await fetch(
			`http://api.ipstack.com/${event.queryStringParameters.ip}?access_key=061de896653a2cbfc3a0d29864d4ea9a`
		);
		const apiData = await apiResponse.json();

		// Configura los encabezados CORS para permitir solicitudes desde tu sitio web
		const response = new Response(JSON.stringify(apiData), {
			headers: {
				'Access-Control-Allow-Origin': 'https://ip-address-tracker2023.netlify.app',
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

export { API, getLocationData, getTimeZone, getUserIp };
