import { API, getLocationData, getTimeZone } from './api';
import { showIpData } from './info.template';
import { updateMapMarker } from '../map';
const ul = document.getElementById('data-list');

export const addHtmlInfo = async (IP) => {
	const { ip, city, isp } = await API(IP);
	const time = await getTimeZone(IP);
	const { regionCode, postalCode, latitude, longitude } = await getLocationData(IP);

	const li = showIpData({ ip, city, regionCode, postalCode, time, isp });
	updateMapMarker(latitude, longitude);

	ul.innerHTML = li;
	const windowWidth = window.innerWidth;

	if (windowWidth >= 640) ul.style.display = 'flex';
	else ul.style.display = 'block';
};
