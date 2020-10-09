import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const ENDPOINTS = {
  ACTIVITY: '/activity',
  LOG: '/log'
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) {}

  private serverUrl = "https://ca027fd5a99a.ngrok.io";

  addActivity(name:string){
    const body = {
      data: { name }
    }
    return this.http.post(this.serverUrl + ENDPOINTS.ACTIVITY, body)
  }
}
