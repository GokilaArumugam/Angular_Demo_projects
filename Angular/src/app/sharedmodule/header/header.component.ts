import { Component } from '@angular/core';
import { LoginModel } from 'src/app/Models/loginModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 btn:boolean=false;
 login:LoginModel=new LoginModel();
}
