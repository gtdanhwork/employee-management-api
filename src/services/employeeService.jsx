import axios from 'axios';

// Thay thế bằng Domain API thực tế của bạn
const BASE_URL = 'https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi';

export const employeeService = {
	getAll: async () => {
		return await axios.get(`${BASE_URL}/LayDanhSachNhanVien`);
	},
	getOne: async (id) => {
		return await axios.get(
			`${BASE_URL}/LayThongTinNhanVien?maNhanVien=${id}`,
		);
	},
	create: async (employeeData) => {
		return await axios.post(`${BASE_URL}/ThemNhanVien`, employeeData);
	},
	update: async (id, employeeData) => {
		return await axios.put(
			`${BASE_URL}/CapNhatThongTinNhanVien?maNhanVien${id}`,
			employeeData,
		);
	},
	remove: async (id) => {
		return await axios.delete(`${BASE_URL}/XoaNhanVien?maSinhVien=${id}`);
	},
};
