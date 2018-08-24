package com.employee.service;
import java.sql.SQLException;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.employee.dao.EmployeeDao;
import com.employee.model.Employee;

@Path("/employee")
public class EmployeeService {

	// URI:
    // /contextPath/servletPath/Employees
    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public List<Employee> getEmployees_JSON() {
        List<Employee> listOfEmployees = EmployeeDao.getAllEMPTABLE();
        return listOfEmployees;
    }
 
    // URI:
    // /contextPath/servletPath/Employees/{EmployeeNo}
    @GET
    @Path("/{EmployeeNo}")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public Employee getEmployee(@PathParam("EmployeeNo") String EmployeeNo) {
    	System.out.println("PUT request from UI GET");
        return EmployeeDao.getEmployee(EmployeeNo);
    }
 
    // URI:
    // /contextPath/servletPath/Employees
    @POST
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public Employee addEmployee(Employee Employee) throws SQLException {
        return EmployeeDao.addEmployee(Employee);
    }
 
    // URI:
    // /contextPath/servletPath/Employees
    @PUT
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public Employee updateEmployee(Employee Employee) throws SQLException {
    	
        return EmployeeDao.updateEmployee(Employee);
    }
 
    @DELETE
    @Path("/{EmployeeNo}")
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    public void deleteEmployee(@PathParam("EmployeeNo") String EmployeeNo) throws NumberFormatException, SQLException {
    	System.out.println("DELETE request from UI");
    	EmployeeDao.deleteEmployee(EmployeeNo);
    }
 
}
