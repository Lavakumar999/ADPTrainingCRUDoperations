import { Component, OnInit } from '@angular/core';
import{FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllempService } from '../services/allemp.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class RegisterComponent implements OnInit {
  RegisterForm:FormGroup;
  submitted=false;
  employee:Employee;
  constructor(private formBuilder:FormBuilder,private empService:AllempService) {
   }

  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      fname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      salary:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      deptno:['',[Validators.required,Validators.pattern('^[a-zA-z0-9]+$')]],
      email:['',[Validators.required,Validators.email]],
      
    });
   
  }
  get f(){
    return this.RegisterForm.controls;
  }
  onSubmit(regsitervalues){
    this.submitted=true;
    console.log(regsitervalues)
    
    this.employee={
      "empId":regsitervalues["id"],
      "empName":regsitervalues["fname"]+regsitervalues["lname"],
      "empSalary":regsitervalues["salary"],
      "empDept":regsitervalues["deptno"],
      "empGmail":regsitervalues["email"]
    }
    console.log(this.employee)
    if(this.RegisterForm.invalid){
      return
    }
    
    this.empService.insertEmployee(this.employee).subscribe((res:Response)=>{
      alert("Sucess");
      console.log(res)});
  }

}
