import { Component, OnInit } from '@angular/core';
import { UserData } from '../userData.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  userData: UserData[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // get user data from json file
    this._userService.getData().subscribe(res => {
      this.userData = res;
      console.log(res);
    });
  }

}
