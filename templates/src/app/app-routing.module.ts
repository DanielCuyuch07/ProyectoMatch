import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SliderMenuComponent } from './component/slider-menu/slider-menu.component';
import { SliderAdminComponent } from './component/slider-admin/slider-admin.component';
import { PdfComponent } from './component/pdf/pdf.component';
import { ExcelComponent } from './component/excel/excel.component';
import { UserComponent } from './component/user/user.component';
import { CorreoUserComponent } from './component/correo-user/correo-user.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'slider', component: SliderMenuComponent },
  { path: 'sliderAdmin', component: SliderAdminComponent },
  { path: 'correoUser', component: CorreoUserComponent },
  { path: 'users', component: UserComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'excel', component: ExcelComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
