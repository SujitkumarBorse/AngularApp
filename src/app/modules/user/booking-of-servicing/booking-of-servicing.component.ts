import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-booking-of-servicing',
  templateUrl: './booking-of-servicing.component.html',
  styleUrls: ['./booking-of-servicing.component.scss']
})
export class BookingOfServicingComponent implements OnInit {

  constructor() { }

  ngOnInit() :void {
    $(document).ready(function(){
      $('input:checkbox').click(function() {
          $('input:checkbox').not(this).prop('checked', false);
      });
  });
  }
  

}
