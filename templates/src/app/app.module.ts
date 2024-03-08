import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SliderMenuComponent } from './component/slider-menu/slider-menu.component';
import { SliderAdminComponent } from './component/slider-admin/slider-admin.component';
import { PdfComponent } from './component/pdf/pdf.component';
import { ExcelComponent } from './component/excel/excel.component';
import { UserComponent } from './component/user/user.component';
import { CorreoUserComponent } from './component/correo-user/correo-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SliderMenuComponent,
    SliderAdminComponent,
    PdfComponent,
    ExcelComponent,
    UserComponent,
    CorreoUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
