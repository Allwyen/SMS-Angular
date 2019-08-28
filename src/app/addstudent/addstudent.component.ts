import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  private mydata:Array<object> = [];

  onSubmit(data:NgForm)
  {
    this.apiservice.addstudentdata(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
    });
  }

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
