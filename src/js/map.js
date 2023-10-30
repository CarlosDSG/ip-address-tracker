let map = null;

const createMap = (latitud = 51.505, longitude = -0.09) => {
	map = L.map('map').setView([latitud, longitude], 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	return map;
};

const updateMapMarker = (latitud = 51.505, longitude = 51.505) => {
	if (map) {
		map.setView([latitud, longitude], 13);

		// Crear o actualizar el marcador de ubicación
		if (map.marker) {
			map.marker.setLatLng([latitud, longitude]);
		} else {
			map.marker = L.marker([latitud, longitude]).addTo(map);
		}
	}
};

export { createMap, updateMapMarker };
