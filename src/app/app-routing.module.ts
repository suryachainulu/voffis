import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanydetailsComponent } from './Components/companydetails/companydetails.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { LoginComponent } from './Components/login/login.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { SidenavComponent } from './Layouts/sidenav/sidenav.component';
import { MasterComponent } from './Master/master/master.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'header',component: HeaderComponent},
  {path:'sidenav',component: SidenavComponent},
  {path:'footer',component: FooterComponent},
  {path:'master',component: MasterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'companydetails',component:CompanydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
