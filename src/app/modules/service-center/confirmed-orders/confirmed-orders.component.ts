import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from '../serviceCenter.service';
import { ServiceCenterData } from '../serviceCenterData.model';

@Component({
  selector: 'app-confirmed-orders',
  templateUrl: './confirmed-orders.component.html',
  styleUrls: ['./confirmed-orders.component.scss']
})
export class ConfirmedOrdersComponent implements OnInit {
  
  serviceCenterData : ServiceCenterData[];

  constructor(private _serviceCenterService : ServiceCenterService) { }

  ngOnInit() {
      // get user data from json file
      this._serviceCenterService.getData().subscribe(res => {
        this.serviceCenterData = res;
        console.log(res);
      });
  }
 

}
