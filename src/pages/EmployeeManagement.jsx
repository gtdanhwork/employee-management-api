import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { employeeService } from '../services/employeeService';

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await employeeService.getAll();
      setEmployees(response.data);
    } catch (error) {
      console.error("Lỗi khi tải danh sách nhân viên:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân viên này không?")) {
      try {
        await employeeService.remove(id);
        fetchEmployees();
      } catch (error) {
        console.error("Lỗi khi xóa nhân viên:", error);
      }
    }
  };

  return (
    <div className="employee-management">
      <div className="header-actions">
        <h2>Quản lý Thông tin Nhân viên</h2>
        <Link to="/admin/employee" className="btn-add">
          + Thêm Nhân Viên Mới
        </Link>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Mã NV</th>
            <th>Tên Nhân Viên</th>
            <th>Chức Vụ</th>
            <th>Hệ Số Chức Vụ</th>
            <th>Lương Cơ Bản</th>
            <th>Số Giờ Làm/Tháng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.maNhanVien}>
              <td>{emp.maNhanVien}</td>
              <td>{emp.tenNhanVien}</td>
              <td>{emp.chucVu}</td>
              <td>{emp.heSoChucVu}</td>
              <td>{emp.luongCoBan}</td>
              <td>{emp.soGioLamTrongThang}</td>
              <td>
                <button 
                  className="btn-action btn-edit"
                  onClick={() => navigate(`/admin/employee/${emp.maNhanVien}`)}
                >
                  Sửa
                </button>
                <button 
                  className="btn-action btn-delete"
                  onClick={() => handleDelete(emp.maNhanVien)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan="7" className="no-data">Không có dữ liệu nhân viên.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}