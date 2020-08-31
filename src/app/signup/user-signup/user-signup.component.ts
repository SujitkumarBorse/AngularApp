import { Component, OnInit } from '@angular/core';
import { User } from './userForm';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor() { }

  user = new User('sujitkumar borse', 'sborse15@gmail.com', 9028725588,'user123');
  
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  ngOnInit() {
  }


}
