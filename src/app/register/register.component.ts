import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      (user)=>{this.router.navigate(['/login'])}
    )
  }

}
