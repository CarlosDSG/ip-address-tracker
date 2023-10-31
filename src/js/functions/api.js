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

const getLocationData = async (ip) => {
	// URL de tu función proxy en Netlify (reemplaza 'tudominio.com' con tu dominio de Netlify)
	const proxyUrl = 'https://ip-address-tracker2023.netlify.app/.netlify/functions/proxy';

	// Realiza una solicitud GET a través del proxy
	const api = await fetch(`${proxyUrl}?ip=${ip}`);
	const data = await api.json();

	const ipData = {
		regionCode: data.region_code,
		latitude: data.latitude,
		longitude: data.longitude,
		postal: data.zip,
	};

	return ipData;
};

export { API, getLocationData, getTimeZone, getUserIp };
