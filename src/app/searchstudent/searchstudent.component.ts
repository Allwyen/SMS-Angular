import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  private mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiservice.searchstudentdata(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

  deletestudent()
  {
    this.apiservice.deletestudentdata(this.mydata[0]).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

  updatestudent()
  {
    this.apiservice.updatestudentdata(this.mydata[0]).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

  ngOnInit() {
  }

}
