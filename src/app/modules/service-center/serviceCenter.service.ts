import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCenterData } from './serviceCenterData.model';



@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {

    
  private url: string = "../../../assets/data/serviceCenterData.json";
  
  constructor(private _http: HttpClient) {
  }


  getData(): Observable<ServiceCenterData[]> {
    return this._http.get<ServiceCenterData[]>(this.url);
  }

}
