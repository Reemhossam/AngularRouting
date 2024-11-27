import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  authService:AuthService = inject(AuthService);
  route : Router = inject(Router);
  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  loginButtonClick(username : string,password : string){
    //console.log(`username is ${username} and password is ${password}`);
    const user = this.authService.login(username, password);
    if (!user)
      alert(`the login crediential you have entered is not correct.`)
    else
    {
      alert(`Welcome ${user.name} you are logged in.`)
      this.route.navigate(['Courses']);
    }
  }
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((data)=>{
      if (Boolean(data.get('logout')))
      {
        this.authService.logout;
       // alert(`you are now logout, is logged = ${this.authService.isLogged}`);
      }
    })
  }
}
