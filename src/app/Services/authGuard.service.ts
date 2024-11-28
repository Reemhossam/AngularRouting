import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";

export interface IDeactivateComponent{
  canExit: () =>boolean | Observable<boolean> | Promise<boolean>
}

@Injectable(
  {providedIn:'root'}
)
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>{
  constructor(private authService: AuthService, private router: Router){};
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

}
