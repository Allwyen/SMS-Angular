import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addstudentdata(data)
  {
    return this.http.post("http://sms-nem.herokuapp.com/insertstud",data);
  }
}
