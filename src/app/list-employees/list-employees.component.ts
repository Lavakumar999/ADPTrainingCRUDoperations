import { Component, OnInit } from '@angular/core';
import { AllempService } from '../services/allemp.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  allemp_data:Employee[];
  showDetails:boolean;
  selectedIndex: number;
  tempEmp: any;
  detailsdisp:number;

  
  constructor(private empService:AllempService) {
  this.showDetails=false;
  this.selectedIndex = -1;
  this.detailsdisp=-1;
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe(empsData=>{
      this.allemp_data=empsData;
    });
  }
  toggleDetails(index){
   this.detailsdisp=index;
    this.showDetails=!this.showDetails;
  }
  editEmployee(employee,ndx){
    this.selectedIndex = ndx;
    this.tempEmp = {
         empId:employee["empId"],
         empName:employee["empName"],
         empSalary:employee["empSalary"],
         empDept:employee["empDept"],
         empGmail:employee["empGmail"]
    };
    console.log(this.tempEmp)
  }
  cancelEdit(){
    this.selectedIndex=-1;
  }
  updateEmployee(employee,index){
    this.empService.updateEmployee(employee).subscribe((res:Response)=>{
      alert("Sucess");
      console.log(res);
    }
    );
    this.selectedIndex = -1;
  }
  deleteEmployee(employee,index){
    this.empService.deleteEmployee(employee).subscribe((res:Response)=>{
      alert("Sucess");
      console.log(res)}
      
    );
    this.selectedIndex = -1;
  }

}

