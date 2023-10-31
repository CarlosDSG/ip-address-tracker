import { API, getLocationData, getTimeZone } from './api';
import { showIpData } from './info.template';
import { updateMapMarker } from '../map';
const ul = document.getElementById('data-list');

export const addHtmlInfo = async (ip) => {
	const IP_DATA = await API(ip);
	const timeZone = await getTimeZone(ip);
	const locationIpData = await getLocationData(ip);

	const li = showIpData({
		ip: IP_DATA.ip,
		city: IP_DATA.city,
		regionCode: locationIpData.regionCode,
		postalCode: locationIpData.postalCode,
		time: timeZone,
		isp: IP_DATA.isp,
	});
	updateMapMarker(locationIpData.latitude, locationIpData.longitude);

	ul.innerHTML = li;
	const windowWidth = window.innerWidth;

	if (windowWidth >= 640) ul.style.display = 'flex';
	else ul.style.display = 'block';
};
