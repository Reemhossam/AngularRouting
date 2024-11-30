import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { delay, Observable, of } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { CoursesComponent } from "../courses/courses.component";
import { Course } from "../Models/course";
import { CourseService } from "./course.service";

export interface IDeactivateComponent{
  canExit: () =>boolean | Observable<boolean> | Promise<boolean>
}

@Injectable(
  {providedIn:'root'}
)
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]>{
  constructor(private authService: AuthService, private router: Router, private coursesService: CourseService){};
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  | Promise<boolean> {

    let isLoggedIn = this.authService.IsAuthenticated();
    if (isLoggedIn){
      return true
    } else {
      return this.router.navigate(['Login']);
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean>  | Promise<boolean> {

      return this.canActivate(childRoute,state);
  }

canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)
: MaybeAsync<GuardResult> {

  return component.canExit();
}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[]| Observable<Course[]>  | Promise<Course[]> {
  // let coursesList :Course[] = [];
  // this.coursesService.getAllcourses().subscribe((courses:Course[])=>{
  //   coursesList= courses;
  // });
  // return coursesList;
  return this.coursesService.getAllcourses();
}


}
