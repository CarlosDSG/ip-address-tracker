const getUserIp = async () => {
	const api = (await fetch('https://api.ipify.org/?format=json')).json();
	return api;
};

const API = async (ip) => {
	const api = await fetch(`https://ipinfo.io/${ip}?token=9b3fa73dd65477`);
	const data = await api.json();
	return {
		ip: data.ip,
		city: data.city,
		isp: data.org,
	};
};

const getTimeZone = async (ip) => {
	const api = await fetch(
		`https://geo.ipify.org/api/v2/country?apiKey=at_bV4UUCqybCwXZ7v0oj1YPEn4fuDR5&ipAddress=${ip}`
	);
	const data = await api.json();
	return data.location.timezone;
};

const getLocationData = async (ip) => {
	const options = { method: 'GET' };
	try {
		const response = await fetch(
			`https://ipgeolocation.abstractapi.com/v1/?api_key=1352261990424b049e19beb1045faa8a&ip_address=${ip}`,
			options
		);
		const data = await response.json();
		return {
			regionCode: data.region_iso_code,
			postalCode: data.postal_code,
			latitude: data.latitude,
			longitude: data.longitude,
		};
	} catch (error) {
		console.error(error);
	}
};

export { API, getLocationData, getTimeZone, getUserIp };
