import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authGuard.service';
import {  CanActivatefn, CanDeactivatefn } from './auth.guard';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  //{path:'Contact', component:ContactComponent ,canDeactivate :[AuthGuardService]}, //using canDeactivate Service
  {path:'Contact', component:ContactComponent ,canDeactivate :[CanDeactivatefn]}, //using canDeactivate fn
  {path:'Courses', component:CoursesComponent},
  {path:'Courses', canActivateChild:[CanActivatefn],children:[
    {path:'Course/:id', component:CourseDetailComponent},
    {path:'Checkout', component:CheckoutComponent}, //using canActivateChild Service
    //{path:'Checkout', component:CheckoutComponent, canActivate:[AuthGuardService]}, //using canActivate Service
    //{path:'Checkout', component:CheckoutComponent, canActivate:[CanActivatefn]},  //using canActivate fn
  ]},
  //{path:'Courses/Course/:id', component:CourseDetailComponent},
  {path:'Login',component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];
