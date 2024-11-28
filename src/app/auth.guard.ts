import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { CanDeactivate, Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { IDeactivateComponent } from "./Services/authGuard.service";

export const CanActivatefn = ()=>{
  const authService = inject (AuthService);
  const router = inject (Router);
  console.log('CanActivate fn called');

  let isLoggedIn = authService.IsAuthenticated();
  if (isLoggedIn){
    return true
  } else {
    return router.navigate(['Login']);
  }
}

export const CanDeactivatefn = (component:IDeactivateComponent)=>{
  const router = inject (Router);
  console.log('CanDeactivatefn fn called');

  return component.canExit();
}

