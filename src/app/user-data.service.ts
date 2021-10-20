import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getuserFun()
  {
    return{
      name : 'jibhau',
      city : 'nashik',
      state : 'maharashtra',
      pin_code : 423106
    }    
  }
  getdatafromjson()
    {
      let url = 'https://jsonplaceholder.typicode.com/todos/'
      return this.http.get(url)
    }

  getdatafromjsonuser()
    {
      let url = 'https://jsonplaceholder.cypress.io/users/'
      return this.http.get(url)
    }
    getpurticulardatauser()
    {
      let url = "https://jsonplaceholder.cypress.io/users/1"
      return this.http.get(url)
    }
}
