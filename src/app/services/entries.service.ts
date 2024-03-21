import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  url="http://localhost:4000/users"
  url2="http://localhost:4000/download-csv"
  //url="http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  postEntry(data:any){
    return this.http.post(this.url,data)
  }
  getCSV(){
    return this.http.get(this.url2)
  }

}
