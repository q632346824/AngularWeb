import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any
  constructor(private http:HttpClient) { }  // choose http/common

  ngOnInit() {
    this.getVal()
  }

  getVal(){
    this.http.get('http://localhost:5000/api/values').subscribe(response=>{
      this.values=response
      console.log("1233")
    }, error=>{
      console.log(error)
    })
  }

}
