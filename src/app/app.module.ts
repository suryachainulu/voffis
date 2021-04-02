import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { SidenavComponent } from './Layouts/sidenav/sidenav.component';
import { MasterComponent } from './Master/master/master.component';
import { LoginComponent } from './Components/login/login.component';
import 'bootstrap';
import { EmployeeComponent } from './Components/employee/employee.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { CompanydetailsComponent } from './Components/companydetails/companydetails.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MasterComponent,
    LoginComponent,
    EmployeeComponent,
    CompanydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
