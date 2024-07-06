import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private httpclient :HttpClient){}
   
    saveProduct(product:Product)
    {
      return this.httpclient.post<void>("http://localhost:8080/saveProduct",product)
    }}
    export class Product {
   
      pid:number;
      pname:string;
      pprice:number;
    
      public constructor( pid:number,
        pname:string,
        pprice:number)
      {
       this.pid=pid;
       this.pname=pname;
       this.pprice=pprice;
      
      }
    }
  