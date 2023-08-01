import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    const user = new User(this.username, this.email, this.firstName, this.lastName, this.password) ;
    this.userService.create(user).subscribe(
      data => {
        console.log(data);
        this.backToList()
      },
      err => console.log(err)
    )
  }
  backToList(){
    this.router.navigate(['/list'])
  }
}
