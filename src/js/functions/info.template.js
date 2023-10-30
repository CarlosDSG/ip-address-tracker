export const showIpData = ({ ip, city, regionCode, postalCode, time, isp }) => {
	const template = `
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">IP ADDRESS</h6>
            <p class="font-bold">${ip}</p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">LOCATION</h6>
            <p class="font-bold">${city}, ${regionCode} ${postalCode} </p>
        </li>
        <li class="mb-4">
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">TIMEZONE</h6>
            <p class="font-bold">UTC ${time}</p>
        </li>
        <li>
            <h6 class="text-xs text-gray-600 font-medium tracking-widest">ISP</h6>
            <p class="font-bold">${isp}</p>
        </li>
    `;
	return template;
};
