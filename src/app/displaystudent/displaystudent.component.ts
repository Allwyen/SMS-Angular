import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {

  private mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.viewstudentdata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
