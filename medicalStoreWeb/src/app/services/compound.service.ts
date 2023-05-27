import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from 'src/environment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  BASE_URL = environment.BASE_URL;
  compoundData: any;
  constructor(private http: HttpClient) { }

  getAllCompound(endPoint:string): Observable<any> {
    return this.http.get(this.BASE_URL + endPoint);
  }
}
