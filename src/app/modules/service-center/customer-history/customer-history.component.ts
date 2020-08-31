import { Component, OnInit } from '@angular/core';
import { ServiceCenterData } from '../serviceCenterData.model';
import { ServiceCenterService } from '../serviceCenter.service';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.scss']
})
export class CustomerHistoryComponent implements OnInit {

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