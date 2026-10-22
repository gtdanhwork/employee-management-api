import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminTemplate from './templates/AdminTemplate';
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import CreateAndEditEmployee from './pages/CreateAndEditEmployee.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Điều hướng mặc định vào admin */}
				<Route
					path="/"
					element={<Navigate to="/admin/dashboard" />}
				/>

				<Route
					path="admin"
					element={<AdminTemplate />}
				>
					<Route
						path="dashboard"
						element={<Dashboard />}
					/>
					<Route
						path="employees"
						element={<EmployeeManagement />}
					/>
					{/* Bạn có thể dùng chung 1 component cho cả tạo và sửa nhờ param tuỳ chọn :id? */}
					<Route
						path="employees/create"
						element={<CreateAndEditEmployee />}
					/>
					<Route
						path="employees/edit/:id"
						element={<CreateAndEditEmployee />}
					/>
					<Route
						path="employee/:id?"
						element={<CreateAndEditEmployee />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
