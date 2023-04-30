import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees1: Employee [] = [];
  employees: Employee[] = [
    {
      id: 'u3h4js74',
      name: 'Mat Clark',
      email: 'mat.clark@gmail.com',
      phone: 433943849,
      salary: 40000,
      department: 'Cyber Secuirty'
    },
    {
      id: 'j3hs8fk5',
      name: 'Paul Johnsen',
      email: 'pauljohnsen@live.com',
      phone: 995748234,
      salary: 50000,
      department: 'IT'
    },
    {
      id: '92jd7fh4d',
      name: 'Andrew Clint',
      email: 'andrew_clint@outlook.com',
      phone: 738473623,
      salary: 35000,
      department: 'HR'
    },
  ];
  constructor() {}

  ngOnInit(): void {
     

    }
  }

