import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Slip } from './store/models/add-slip.model';
import { Tbgr } from './store/models/add-tbgr.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="http://127.0.0.1:8080";

  constructor(private http: HttpClient) { }


  getTbgrList(){
    return this.http.get<Array<Tbgr>>(this.APIurl+'/tbgrs/');
  }
  
  deleteTbgr(value:any){
    return this.http.delete(this.APIurl+'/deletetbgr/'+value);
  }
 

  addTbgr(value:any){
    return this.http.post(this.APIurl+'/addtbgr/',value);
  }

  updateTbgr(value:any){
    return this.http.put(this.APIurl+'/updatetbgr/',value);
  }

  getBoardsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/boards/');
  }

  getVillagesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/villages/');
  }

  deleteVillage(value:any){
    return this.http.delete(this.APIurl+'/deletevillage/'+value);
  }

  addVillage(value:any){
    return this.http.post(this.APIurl+'/addvillage/',value);
  }

  updateVillage(value:any){
    return this.http.put(this.APIurl+'/updatevillage/',value);
  }

  getCardsList(){
    return this.http.get<any>(this.APIurl+'/slips/');
  }

  deleteCard(value:any){
    return this.http.delete(this.APIurl+'/deleteslip/'+value);
  }

  addCard(value:any){
    return this.http.post(this.APIurl+'/addslip/',value);
  }

  updateCard(value:any){
    return this.http.put(this.APIurl+'/updateslip/',value);
  }

  getGradesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/grades/');
  }

  getContactsList(){
    return this.http.get<any>(this.APIurl+'/contacts/');
  }

  deleteContact(value:any){
    return this.http.delete(this.APIurl+'/deletecontact/'+value.toString());
  }

  addContact(value:any){
    return this.http.post(this.APIurl+'/addcontact/',value);
  }

  updateContact(value:any){
    return this.http.put(this.APIurl+'/updatecontact/',value);
  }

  getData():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/data');
  }

}

