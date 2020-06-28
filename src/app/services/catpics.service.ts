import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatpicsService {
  api_key:string;
  url:string;
  fact_url:string;
  options:any;
  httpOptions:any
  //data:Observable<Blob>;
  data:any;
  constructor(private http: HttpClient) {
    this.api_key="41c33a30-dc0c-41cb-a379-894131798ffe";
    this.url="https://api.thecatapi.com/v1/images/search?mime_types=jpg,png"
    this.fact_url="https://cat-fact.herokuapp.com/facts"
    //this.url="https://cdn2.thecatapi.com/images/XNCg_KZmX.jpg"
  }
  getCats(){
    return this.http.get(
      this.url
    );
  }
  getCatFacts(){
    return this.http.get(
      this.fact_url
    );
  }
  /*getCatsPics():Observable<Blob>{
    //{ headers : {[X-Api-Key:this.api_key]:}, responseType: 'blob' }
    this.httpOptions={
      headers:new HttpHeaders({'X-Api-Key':this.api_key}),
      responseType: 'blob'
    }

    this.data=this.http.get(this.url,this.httpOptions)
    .pipe(mergeMap(data1 => 
      this.http.get(data1[0].url,this.httpOptions))
    );
    return this.data;
  }*/
  /*getCatsPics():any{
    //{ headers : {[X-Api-Key:this.api_key]:}, responseType: 'blob' }
    this.httpOptions={
      headers:new HttpHeaders({'x-api-key':this.api_key}),
      responseType: 'blob'
    }
    var xhr =new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", this.url);
    xhr.setRequestHeader("x-api-key", this.api_key);
    xhr.send(this.data);
    //this.data=this.http.get(this.url,this.httpOptions);
    return this.data;
  }*/
}
