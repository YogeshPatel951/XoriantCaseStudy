import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export  class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      console.log("Getting data");
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
    }
    getuserdata(id:number) {
      console.log("Getting data");
      return this.http.get(UserService.BaseUrl+'allfriends/'+id,httpOptions).pipe(map((response: Response) => response.json()));
    }
    postContactData(data){
      
      return this.http.post(UserService.BaseUrl+'contact',data,httpOptions).pipe(map((response: Response) =>  response.json()));
    }
    deleteuserdata(id:number){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+id).pipe(map((response: Response) => response.json()));
    }
    updateuserdata(id:number, data){
      return this.http.put(UserService.BaseUrl+'allfriends/'+id,data,httpOptions).pipe(map((response: Response) => response.json()));
    }
}