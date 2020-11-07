import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Slip } from './store/models/add-slip.model';
import { Tbgr } from './store/models/add-tbgr.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }


  getTbgrList(){
    return this.http.get<Array<Tbgr>>(this.APIurl+'/tbgr/');
  }
  
  deleteTbgr(value:any){
    return this.http.delete(this.APIurl+'/tbgr/'+value);
  }
 

  addTbgr(value:any){
    return this.http.post(this.APIurl+'/tbgr/',value);
  }

  updateTbgr(value:any){
    return this.http.put(this.APIurl+'/tbgr/',value);
  }

  getBoardsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/board/');
  }

  getVillagesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/village/');
  }

  deleteVillage(value:any){
    return this.http.delete(this.APIurl+'/village/'+value);
  }

  addVillage(value:any){
    return this.http.post(this.APIurl+'/village/',value);
  }

  updateVillage(value:any){
    return this.http.put(this.APIurl+'/village/',value);
  }

  getCardsList(){
    return this.http.get<any>(this.APIurl+'/card/');
  }

  deleteCard(value:any){
    return this.http.delete(this.APIurl+'/card/'+value);
  }

  addCard(value:any){
    return this.http.post(this.APIurl+'/card/',value);
  }

  updateCard(value:any){
    return this.http.put(this.APIurl+'/card/',value);
  }

  getGradesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/grade/');
  }

  getContactsList(){
    return this.http.get<any>(this.APIurl+'/contact/');
  }

  deleteContact(value:any){
    return this.http.delete(this.APIurl+'/contact/'+value.toString());
  }

  addContact(value:any){
    return this.http.post(this.APIurl+'/contact/',value);
  }

  updateContact(value:any){
    return this.http.put(this.APIurl+'/contact/',value);
  }

}

