import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  UserDataService } from '../user-data.service'

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  name = ''
  city = ''
  pin_code : any
  data : any

  constructor(private user : UserDataService) {
    console.log("user1 data:",user.getuserFun())
    let data = this.user.getuserFun()
    this.name = data.name
    this.city = data.city
    this.pin_code = data.pin_code

    this.user.getdatafromjsonuser().subscribe(data =>{
      console.log(data)
      this.data = data
      
    })
    
  }
  
  ngOnInit(): void {
  }

}
