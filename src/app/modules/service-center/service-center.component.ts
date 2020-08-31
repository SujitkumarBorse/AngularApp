import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {

  constructor(private router: Router) { }

  togglesidebar() {
    return document.getElementById("sidebar").classList.toggle("active");
  }
  logout() {
    if (confirm("Are you sure?")) {
      localStorage.setItem('isAuthorizedUser', 'false');
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
  }

}
