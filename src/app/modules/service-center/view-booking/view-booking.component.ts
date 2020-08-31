import { Component, OnInit } from '@angular/core';
import { ServiceCenterData } from '../serviceCenterData.model';
import { ServiceCenterService } from '../serviceCenter.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {

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
