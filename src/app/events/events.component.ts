import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  public buttonName: any = 'Shaw All';
  isShown: boolean = false; // hidden by default

  toggle() {
    this.isShown = !this.isShown;

    if (this.isShown)
      this.buttonName = "Hide All";
    else
      this.buttonName = "Shaw All";
  }

  ngOnInit() {
  }
  
}
