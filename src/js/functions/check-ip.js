export const validateIP = (ip, button) => {
	const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

	if (regex.test(ip) && ip.length > 0) {
		button.disabled = false;
		button.classList.remove('bg-gray-400');
		button.classList.add('bg-black');
	} else {
		button.disabled = true;
		button.classList.remove('bg-black');
		button.classList.add('bg-gray-400');
	}
};
