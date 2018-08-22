import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Employee} from '../../models/Employee';

const httpOptions ={
    headers:new HttpHeaders(
        {'Content-Type':'application/json','Access-Control-Allow-Methods':'GET,POST,PUT,OPTIONS,DELETE',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With.Content-Type,Accept'
      }
    )
};

@Injectable({
    providedIn: 'root'
})
export class AllempService {
    //private headers = new Headers({'Content-Type': 'application/json'});
  empUrl='/rest/employee';
    constructor(private http:HttpClient) {}
    getEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.empUrl);
    }
    updateEmployee(employee :Employee):Observable<any>{
        return this.http.put(this.empUrl,JSON.stringify(employee),httpOptions);
    }
    deleteEmployee(employee :Employee):Observable<any>{
        console.log(this.empUrl+"/"+employee.empId);
        return this.http.delete(this.empUrl+"/"+employee.empId,httpOptions);
    }
    insertEmployee(employee: Employee):Observable<any>{
        return this.http.post(this.empUrl,employee);

    }
}