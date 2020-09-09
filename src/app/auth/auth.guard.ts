import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../shared/book.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggin: boolean
  constructor(private userService: UserService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.userService.isLoggin.subscribe(
      (isLoggin) => {
        this.isLoggin = isLoggin
      }
    )
    if (this.isLoggin){
     return true;
    }
    else{ 
      this.router.navigate(['/login']);
    }
  }

}
