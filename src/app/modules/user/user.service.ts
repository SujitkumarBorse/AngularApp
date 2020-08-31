import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './userData.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url: string = "../../../assets/data/userData.json";
  
  constructor(private _http: HttpClient) {
  }


  getData(): Observable<UserData[]> {
    return this._http.get<UserData[]>(this.url);
  }

}
