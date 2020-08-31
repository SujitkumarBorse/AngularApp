import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) {
  }

  togglesidebar() {
    return document.getElementById("sidebar").classList.toggle("active");
  }
  logout() {
    if(confirm("Are you sure?")) {
      localStorage.setItem('isAuthorizedUser', 'false');
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {

  }

}
