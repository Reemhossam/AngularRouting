import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { CanDeactivate, Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { IDeactivateComponent } from "./Services/authGuard.service";
import { CourseService } from "./Services/course.service";

export const CanActivatefn = ()=>{
  const authService = inject (AuthService);
  const router = inject (Router);

  let isLoggedIn = authService.IsAuthenticated();
  if (isLoggedIn){
    return true
  } else {
    return router.navigate(['Login']);
  }
}

export const CanDeactivatefn = (component:IDeactivateComponent)=>{
  const router = inject (Router);

  return component.canExit();
}

export const Resolvefn = ()=>{
  const coursesService = inject (CourseService);
  return coursesService.getAllcourses();
}

