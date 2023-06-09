import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './sharedmodule/header/header.component';
import { FooterComponent } from './sharedmodule/footer/footer.component';
import { TaskComponent } from './task/task.component';
import { taskservices } from './task/Service/TaskService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [taskservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
