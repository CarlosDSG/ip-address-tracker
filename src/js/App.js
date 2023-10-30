import { validateIP } from './functions/check-ip';
import { getUserIp } from './functions/api';
import { createMap } from './map';
import { addHtmlInfo } from './functions/add-html-info';
const btn = document.getElementById('get-ip');
const INPUT_IP = document.getElementById('ip-input');
const ul = document.getElementById('data-list');

let map = null;

(async () => {
	if (!map) map = createMap();

	window.addEventListener('load', async (e) => {
		e.preventDefault();
		let userIP = await getUserIp();
		addHtmlInfo(userIP.ip);
	});

	INPUT_IP.addEventListener('keyup', () => validateIP(INPUT_IP.value, btn));

	btn.addEventListener('click', async (e) => {
		e.preventDefault();
		addHtmlInfo(INPUT_IP.value);
	});
})();

document.addEventListener('click', (event) => {
	if (!ul.contains(event.target)) ul.style.display = 'none';
});
