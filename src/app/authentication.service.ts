import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL = "https://reqres.in/api/";

  constructor(private httpClient:HttpClient) { }


login(veri)
  {
    return this.httpClient.post(this.URL + 'login', veri);
  }

signup(veri)
  {
    return this.httpClient.post(this.URL + 'register', veri);
  }
userList()
{
  return this.httpClient.get(this.URL + 'users')
}

}
