import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getSearchResult = (data) => {
	return axios.get(
		`${domainHost}/user/getAllBooking?noi_di=${data.noi_di}&noi_den=${data.noi_den}&ngay_bat_dau=${data.ngay_bat_dau}&gio_bat_dau=${data.gio_bat_dau}`
	);
};

const registerUser = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/user/dangky`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const loginUser = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/user/dangnhap`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const logoutUser = (token) => {
	return axios({
		method: 'post',
		url: `${domainHost}/user/dangxuat`,
		headers: {
			'content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
};

const uploadPassInfo = (id, data, token) => {
	return axios({
		method: 'post',
		url: `${domainHost}/user/bookingOrder/${id}`,
		headers: {
			'content-Type': 'application/json',
			token: `Bearer ${token}`,
		},
		data,
	});
};

const uploadPassInfo2 = (idPass, idTrip, data, token) => {
	return axios({
		method: 'post',
		url: `${domainHost}/user/bookingOrder2/${idPass}/${idTrip}`,
		headers: {
			'content-Type': 'application/json',
			token: `Bearer ${token}`,
		},
		data,
	});
};

const showHistory = (token) => {
	return axios({
		method: 'get',
		url: `${domainHost}/user/history`,
		headers: {
			'content-Type': 'application/json',
			token: `Bearer ${token}`,
		},
	});
};

export {
	getSearchResult,
	registerUser,
	loginUser,
	logoutUser,
	uploadPassInfo,
	uploadPassInfo2,
	showHistory,
};
