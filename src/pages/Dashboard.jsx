import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<div className="dashboard-container">
			<h2>Trang Tổng Quan (Dashboard)</h2>
			<p>
				Chào mừng bạn đến với hệ thống quản lý nhân viên sử dụng React
				Router Dom, Formik và Yup.
			</p>

			{/* Thống kê nhanh */}
			<div className="stats-grid">
				<div className="stat-card">
					<h3>Quản lý nhân viên</h3>
					<p>Xem, thêm, sửa, xóa thông tin nhân viên nhanh chóng.</p>
					<Link
						to="/admin/employees"
						className="card-link primary"
					>
						Truy cập danh sách &rarr;
					</Link>
				</div>

				<div
					className="stat-card"
					style={{ borderTopColor: '#28a745' }}
				>
					<h3>Thêm nhân viên mới</h3>
					<p>
						Tạo bản ghi nhân viên mới với Formik & Yup validation.
					</p>
					<Link
						to="/admin/employee"
						className="card-link success"
					>
						Thêm mới &rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}
