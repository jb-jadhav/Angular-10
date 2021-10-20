import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../user-data.service'

 
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  name = ''
  city = ''
  pin_code : number|any
  data :any = [] 
  

  constructor(private user2 : UserDataService) 
  { 
    this.user2.getdatafromjson().subscribe(data=>{
      console.log(data) 
      this.data =data
    },error =>
    {
      console.log(error)
    });
  }

  ngOnInit(): void {
  }

}
