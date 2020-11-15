import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddSlipAction, LoadSlipAction } from 'src/app/store/actions/add-slip.actions';
import { LoadGradeAction } from 'src/app/store/actions/root.actions';
import { Slip } from 'src/app/store/models/add-slip.model';
import { Tbgr } from 'src/app/store/models/add-tbgr.model';
import { rootInterfaceState, SlipInterfaceState } from 'src/app/store/models/app-state.model';
import { Grade } from 'src/app/store/models/grade.model';

@Component({
  selector: 'app-add-slip',
  templateUrl: './add-slip.component.html',
  styleUrls: ['./add-slip.component.scss'],
})
export class AddSlipComponent implements OnInit {

  newSlip : Slip = {date:"", tbgr:null,grade:"",lotno:null,weight:null,price:null }
  Grades$: Observable<Array<Grade>>;
  Tbgrs$: Observable<Array<Tbgr>>;
  Grades:Array<Grade>
  Tbgrs:Array<Tbgr>

  constructor( private slipstore: Store<SlipInterfaceState>,
    private rootstore :Store<rootInterfaceState>) 
    
  { 
    this.Grades$=this.rootstore.select(rootstore => rootstore.grade.list);
    this.Tbgrs$=this.slipstore.select(slipstore => slipstore.tbgr.list);

    this.Grades$.subscribe(grades => {
      this.Grades = grades;
    });

    this.Tbgrs$.subscribe(tbgrs => {
      this.Tbgrs = tbgrs;
    });

  }

  ngOnInit() {
    this.rootstore.dispatch(new LoadGradeAction());
    this.slipstore.dispatch(new LoadSlipAction());
  }

  OnSlipClear(){
    this.newSlip.tbgr=null
    this.newSlip.price=null
    this.newSlip.weight=null
    this.newSlip.lotno=null
    this.newSlip.grade=""
  }
  
  addSlip(){
    this.slipstore.dispatch(new AddSlipAction(this.newSlip));
    this.newSlip = {date:"", tbgr:null,grade:"",lotno:null,weight:null,price:null };
  }
}
