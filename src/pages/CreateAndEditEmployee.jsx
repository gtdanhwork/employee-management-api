import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { employeeService } from '../services/employeeService';

export default function CreateAndEditEmployee() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [initialValues, setInitialValues] = useState({
		maNhanVien: '',
		tenNhanVien: '',
		chucVu: '',
		heSoChucVu: '',
		luongCoBan: '',
		soGioLamTrongThang: '',
	});

	useEffect(() => {
		if (id) {
			employeeService
				.getOne(id)
				.then((res) => setInitialValues(res.data))
				.catch((err) =>
					console.error('Lỗi khi tải thông tin nhân viên:', err),
				);
		}
	}, [id]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: initialValues,
		validationSchema: Yup.object({
			maNhanVien: Yup.number()
				.required('Mã nhân viên là bắt buộc')
				.typeError('Phải là số'),
			tenNhanVien: Yup.string().required('Tên nhân viên là bắt buộc'),
			chucVu: Yup.string().required('Chức vụ là bắt buộc'),
			heSoChucVu: Yup.number()
				.required('Hệ số chức vụ là bắt buộc')
				.typeError('Phải là số'),
			luongCoBan: Yup.number()
				.required('Lương cơ bản là bắt buộc')
				.typeError('Phải là số'),
			soGioLamTrongThang: Yup.number()
				.required('Số giờ làm là bắt buộc')
				.typeError('Phải là số'),
		}),
		onSubmit: async (values) => {
			try {
				if (id) {
					await employeeService.update(id, values);
					alert('Cập nhật nhân viên thành công!');
				} else {
					await employeeService.create(values);
					alert('Thêm mới nhân viên thành công!');
				}
				navigate('/admin/employees');
			} catch (error) {
				console.error('Lỗi khi lưu dữ liệu:', error);
			}
		},
	});

	return (
		<div className="employee-form-container">
			<h2>
				{id ? 'Cập Nhật Thông Tin Nhân Viên' : 'Thêm Mới Nhân Viên'}
			</h2>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-group">
					<label>Mã Nhân Viên:</label>
					<input
						type="number"
						name="maNhanVien"
						disabled={!!id}
						value={formik.values.maNhanVien}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.maNhanVien && formik.errors.maNhanVien && (
						<div className="error-msg">
							{formik.errors.maNhanVien}
						</div>
					)}
				</div>

				<div className="form-group">
					<label>Tên Nhân Viên:</label>
					<input
						type="text"
						name="tenNhanVien"
						value={formik.values.tenNhanVien}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.tenNhanVien &&
						formik.errors.tenNhanVien && (
							<div className="error-msg">
								{formik.errors.tenNhanVien}
							</div>
						)}
				</div>

				<div className="form-group">
					<label>Chức Vụ:</label>
					<input
						type="text"
						name="chucVu"
						value={formik.values.chucVu}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.chucVu && formik.errors.chucVu && (
						<div className="error-msg">{formik.errors.chucVu}</div>
					)}
				</div>

				<div className="form-group">
					<label>Hệ Số Chức Vụ:</label>
					<input
						type="number"
						name="heSoChucVu"
						value={formik.values.heSoChucVu}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.heSoChucVu && formik.errors.heSoChucVu && (
						<div className="error-msg">
							{formik.errors.heSoChucVu}
						</div>
					)}
				</div>

				<div className="form-group">
					<label>Lương Cơ Bản:</label>
					<input
						type="number"
						name="luongCoBan"
						value={formik.values.luongCoBan}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.luongCoBan && formik.errors.luongCoBan && (
						<div className="error-msg">
							{formik.errors.luongCoBan}
						</div>
					)}
				</div>

				<div className="form-group">
					<label>Số Giờ Làm Trong Tháng:</label>
					<input
						type="number"
						name="soGioLamTrongThang"
						value={formik.values.soGioLamTrongThang}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.soGioLamTrongThang &&
						formik.errors.soGioLamTrongThang && (
							<div className="error-msg">
								{formik.errors.soGioLamTrongThang}
							</div>
						)}
				</div>

				<button
					type="submit"
					className="btn-submit"
				>
					{id ? 'Cập Nhật' : 'Thêm Mới'}
				</button>
			</form>
		</div>
	);
}
