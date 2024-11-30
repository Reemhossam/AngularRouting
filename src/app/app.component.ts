import { Component, inject, OnInit } from '@angular/core';
import { GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './Services/course.service';
import { ServicesService } from './Services/services.service';
import { UserService } from './Services/user.service';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/authGuard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet, HeaderComponent, FooterComponent, CoursesComponent, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    //CourseService, ServicesService, UserService, AuthService, AuthGuardService
  ]
})
export class AppComponent implements OnInit{
  title = 'AngularRouting';

  showLoader: boolean = false;
  router :Router = inject(Router);
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }

      if(routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel || 
        routerEvent instanceof NavigationError){
          this.showLoader = false;
        }
    })
  }
}
