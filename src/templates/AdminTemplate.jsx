import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function AdminTemplate() {
	return (
		<div className="admin-layout">
			<div className="sidebar">
				<h2>Admin Panel</h2>
				<ul>
					<li>
						<Link to="/admin/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/admin/employees">Quản lý Nhân Viên</Link>
					</li>
					<li>
						<Link to="/admin/employees/create">
							Thêm Nhân Viên (Form riêng)
						</Link>
					</li>
				</ul>
			</div>

			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}
