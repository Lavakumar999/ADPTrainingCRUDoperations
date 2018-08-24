package com.employee.dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.employee.model.Employee;

public class EmployeeDao {

		private static final Map<Integer, Employee> employeeMap = new HashMap<Integer, Employee>();
		private static Connection con;
		List<Employee> list;
		static {
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver");
				con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "adporacle");
				initEmployee();
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		private static void initEmployee() throws SQLException {
			Employee employee;
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select * from EMPTABLE");
			while (rs.next()) {
				employee = new Employee(rs.getInt(1),rs.getString(2),rs.getDouble(3),rs.getString(4),rs.getString(5));
				employeeMap.put(employee.getEmpId(), employee);
			}
		}

		public static Employee getEmployee(String empId) {
			return employeeMap.get(Integer.parseInt(empId));
		}

		public static Employee addEmployee(Employee Employee) throws SQLException {
			PreparedStatement pstmt = 
					con.prepareStatement("insert into EMPTABLE values(?, ?, ?, ?, ?)");
			pstmt.setInt(1, Employee.getEmpId());
			pstmt.setString(2, Employee.getEmpName());
			pstmt.setDouble(3, Employee.getEmpSalary());
			pstmt.setString(4, Employee.getEmpDept());
			pstmt.setString(5, Employee.getEmpGmail());
			pstmt.executeQuery();
			employeeMap.put(Employee.getEmpId(), Employee);
			return Employee;
		}

		public static Employee updateEmployee(Employee Employee) throws SQLException {
			PreparedStatement pstmt = 
					con.prepareStatement("update EMPTABLE SET EMPNAME = ?,EMPSALARY = ?,EMPDEPT=?,EMPGAMIL= ? where EMPID = ?");
			pstmt.setInt(5, Employee.getEmpId());
			pstmt.setString(1, Employee.getEmpName());
			pstmt.setDouble(2, Employee.getEmpSalary());
			pstmt.setString(3, Employee.getEmpDept());
			pstmt.setString(4, Employee.getEmpGmail());
			pstmt.executeQuery();
			employeeMap.put(Employee.getEmpId(), Employee);
			return Employee;
		}

		public static void deleteEmployee(String EmployeeNo) throws NumberFormatException, SQLException {
			PreparedStatement pstmt = 
					con.prepareStatement("delete from EMPTABLE where EMPID = ?");
			pstmt.setInt(1, Integer.parseInt(EmployeeNo));
			pstmt.executeQuery();

			employeeMap.remove(Integer.parseInt(EmployeeNo));
		}

		public static List<Employee> getAllEMPTABLE() {
			Collection<Employee> c = employeeMap.values();
			List<Employee> list = new ArrayList<Employee>();
			list.addAll(c);
			return list;
		}

}
