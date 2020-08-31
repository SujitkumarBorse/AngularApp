import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'CarServicing';


  ngOnInit(): void {
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
  }

}
