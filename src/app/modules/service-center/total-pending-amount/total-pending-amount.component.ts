import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from '../serviceCenter.service';
import { ServiceCenterData } from '../serviceCenterData.model';

@Component({
  selector: 'app-total-pending-amount',
  templateUrl: './total-pending-amount.component.html',
  styleUrls: ['./total-pending-amount.component.scss']
})
export class TotalPendingAmountComponent implements OnInit {

  constructor(private _serviceCenterService : ServiceCenterService) { }
  
  serviceCenterData : ServiceCenterData[];

  ngOnInit() {
    this._serviceCenterService.getData().subscribe(res => {
      this.serviceCenterData = res;
      console.log(res);
    });
  }

}
