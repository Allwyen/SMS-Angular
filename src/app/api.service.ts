import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addstudentdata(data)
  {
    return this.http.post("http://localhost:4579/insertstud",data);
  }

  viewstudentdata()
  {
    return this.http.get("http://localhost:4579/viewstud");
  }
  
  searchstudentdata(data)
  {
    return this.http.post("http://localhost:4579/searchstud",data);
  }
  deletestudentdata(data)
  {
    return this.http.post("http://localhost:4579/deletestud",data);
  }
  updatestudentdata(data)
  {
    return this.http.post("http://localhost:4579/updatestud",data);
  }
}
