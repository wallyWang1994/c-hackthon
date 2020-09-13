import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: AuthService,
    private userService: UserService
  ) { }

  canActivate(route, state: RouterStateSnapshot) {
    // console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/login"], {
      queryParams: { returnUrl: state.url }
    });

    const currentUser = this.userService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                console.log(currentUser.role + "fail in " + route.data.roles);
                // role not authorised so redirect to home page
                this.router.navigate(["no-access"]);
                return false;
            }
            // authorised so return true
            return true;
        }


        console.log("Need log in");
        // not logged in so redirect to login page with the return url{queryParams: {returnUrl: state.url}}
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});



    return false;
  }
}
