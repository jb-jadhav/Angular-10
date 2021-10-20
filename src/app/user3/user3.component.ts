import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../user-data.service';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {
  userDetails :any 
  userMsg :any

  constructor(private user3:UserDataService) {
    this.user3.getpurticulardatauser().toPromise()
    .then(responce=>{
      this.userDetails = responce
    })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      this.userMsg = "user Details Loaded"
    })

   }

  ngOnInit(): void {
  }

}
