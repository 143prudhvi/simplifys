import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Slip } from 'src/app/store/models/add-slip.model';
import { SlipInterfaceState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-view-slips',
  templateUrl: './view-slips.component.html',
  styleUrls: ['./view-slips.component.scss'],
})
export class ViewSlipsComponent implements OnInit {

  Viewslips$: Observable<Array<Slip>>;
  Viewslips: Array<Slip>;
  filteredSlips : Array<any>



  constructor( private store: Store<SlipInterfaceState>) {
    this.Viewslips$=this.store.select(store => store.slip.list);
    this.Viewslips$.subscribe(slips => {
      this.Viewslips = slips;
      this.filteredSlips = [...this.Viewslips];
    })
   }

  ngOnInit() {
  }

  applyFilter(filterValue:any){
    const val = filterValue.target.value;
    if(val && val.trim() != ''){
      this.filteredSlips = [...this.Viewslips.filter((slip) =>{
        return (slip.tbgr==val);
      })]
    }
    else{
      this.filteredSlips = [...this.Viewslips]
    }
    
  }

}
