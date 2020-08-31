import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public router:Router) { }

  username:string;
  password:string;

  userLogin(){

    // TODO: Perform authentication with actual user from DB afterward

    if(!this.username || !this.password){
      alert('Please enter username and password');
    }

    localStorage.setItem('currentUser', this.username);

    if(this.username == "user@gmail.com" && this.password == "user123"){
      localStorage.setItem('isAuthorizedUser', 'true');
      this.router.navigate(['/user/booking-of-servicing']);
    }
    else if(this.username =="servcent@gmail.com" && this.password == "servcent123"){
      localStorage.setItem('isAuthorizedUser', 'true');
      this.router.navigate(['/service-center/view-booking']);
    }
    else{
      console.log('please enter currect username and password');
      alert('Please enter currect username and password');
    }
  }
  ngOnInit() {
    if(localStorage.getItem('isAuthorizedUser') && JSON.parse(localStorage.getItem('isAuthorizedUser'))){
      this.router.navigate(localStorage.getItem('currentUser') === 'user@gmail.com' ? ['/user/booking-of-servicing'] : ['/service-center/view-booking']);
    };
  }

}
