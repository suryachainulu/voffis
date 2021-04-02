import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





// export interface PeriodicElement {
//   id: number;
//   name: string;
//   mail:string
//   role: string;
  
// }





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

 ELEMENT_DATA: any[] = [
    {id: 1, name: 'manoj',mail:'manoj@gmail.com',role: 'Developer'},
    {id: 2, name: 'surya',mail:'surya112@gmail.com', role: 'Developer'},
    {id: 3, name: 'sharath',mail:'sharatht@gmail.com', role: 'Tester'},
    {id: 4, name: 'Mukesh', mail:'chmukesh@gmail.com',role: 'Developer'},
    {id: 5, name: 'prabhu',mail:'prabhu@gmail.com', role: 'Tester'},
    {id: 6, name: 'ravi',mail:'ravi1122@gmail.com', role: 'Developer'},
    {id: 7, name: 'naveen',mail:'naveenj@gmail.com', role: 'Tester'},
    {id: 8, name: 'bharath',mail:'bharath1@gmail.com', role: 'Tester'},
    {id: 9, name: 'rajesh',mail:'rajeshch@gmail.com', role: 'Developer'},
    {id: 10, name: 'Kiran', mail:'kirank@gmail.com',role: 'Developer'},
    {id: 11, name: 'murali',mail:'muralikrishna@gmail.com', role: 'Developer'},
    {id: 12, name: 'chaitanya',mail:'chaitu@gmail.com', role: 'Tester'},
    {id: 13, name: 'teja',mail:'teja@gmail.com', role: 'Developer'},
    {id: 14, name: 'nani',mail:'nani@gmail.com', role: 'Developer'},
    {id: 15, name: 'charan',mail:'ramcharan@gmail.com', role: 'Tester'},
    {id: 16, name: 'Mahesh', mail:'mahesh@gmail.com',role: 'Developer'},
    {id: 17, name: 'Nikil', mail:'nikil@gmail.com',role: 'Developer'},
    {id: 18, name: 'nithin',mail:'nithin@gmail.com', role: 'Tester'},
    {id: 19, name: 'salman',mail:'salman@gmail.com', role: 'Developer'},
    {id: 20, name: 'akshay',mail:'akshay@gmail.com', role: 'Tester'},
    {id: 21, name: 'sampath',mail:'sampath@yahoo.com',role: 'H.R'},
    {id: 22, name: 'srinivas',mail:'srinivas@ymail.com',role: 'Accounts'}
  ];

  array: any=[];
  // selectedValue:any
  table:boolean=true;
  add:boolean=false;

  displayedColumns: string[] = ['id','name','mail','role'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  

  constructor(private modalService: NgbModal) {

  }

   @ViewChild(MatSort) set Matsort(sort: MatSort) {
     this.dataSource.sort = sort;
   }

   @ViewChild(MatPaginator) set Matpaginator(paginator: MatPaginator) {
     this.dataSource.paginator= paginator;
   } ; 
  
  
  employeeid: any;
  name: any;
  email: any;
  role: any;
  
  


   

   addemployee(){
    this.refresh()
      this.add=true
      this.table=false

   }

   save(){
    
    this.ELEMENT_DATA.push({

      id: this.employeeid,
      name: this.name,
      mail: this.email,
      role: this.role
    });
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
     this.add=false;
     this.table=true;
   }
   back(){
    this.add=false
    this.table=true
   }
   refresh(){
     this.employeeid="";
     this.name="";
     this.email="";
     this.role="";
   }
  applyFilter(id: any) {
    this.array = this.ELEMENT_DATA.filter((x: any) => x.id == id.value)
    this.dataSource = new MatTableDataSource(this.array)
  }

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator
  }
  

  title = 'appBootstrap';
  
  closeResult!: string;
  
  
    
  open(content: any) {
    this.refresh()
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });   

} 

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}

