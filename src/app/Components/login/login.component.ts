import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



// import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  
 
  hide = true;

   constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

  

   submit(){
     localStorage.setItem('user',this.userName);
     
    if (this.userName =="" || this.userName==undefined) {
    //  this.notifyService.showError("Enter email id")
    alert("Enter UserName")
     return
   };
   if (this.password == "" || this.password==undefined) {
    //  this.notifyService.showError("Enter password")
    alert("Enter Password")
     return
   };
   if (this.userName == "phani@gmail.com" && this.password == "Test@phani123" ||
     this.userName == "venkat@gmail.com" && this.password == "Test@venkat987" ||
     this.userName == "prabhu@gmail.com" && this.password == "Test@prabhu654") {
       console.log(this.userName,this.password);
     this.router.navigateByUrl('/companydetails');
    //  this.notifyService.showSuccess("login success");
   }
   else {
    //  this.notifyService.showError("login failed");
    alert("Wrong Inputs")
   }
 }


}
