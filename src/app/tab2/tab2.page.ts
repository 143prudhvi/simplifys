import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTbgrAction } from '../store/actions/add-slip.actions';
import { LoadGradeAction } from '../store/actions/root.actions';
import { Tbgr } from '../store/models/add-tbgr.model';
import { rootInterfaceState, SlipInterfaceState } from '../store/models/app-state.model';
import { Grade } from '../store/models/grade.model';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  selectedtbgr: string;
  selectedGrade: string;

  Grades$: Observable<Array<Grade>>;
  Tbgrs$: Observable<Array<Tbgr>>;
  Grades:Array<Grade>
  Tbgrs:Array<Tbgr>

  ngOnInit(){
    this.rootstore.dispatch(new LoadGradeAction());
    this.slipstore.dispatch(new LoadTbgrAction());
  }

  constructor(
    private rootstore :Store<rootInterfaceState>,
    private slipstore : Store<SlipInterfaceState>){
      this.Grades$=this.rootstore.select(rootstore => rootstore.grade.list);
    this.Tbgrs$=this.slipstore.select(slipstore => slipstore.tbgr.list);

    this.Grades$.subscribe(grades => {
      this.Grades = grades;
    });

    this.Tbgrs$.subscribe(tbgrs => {
      this.Tbgrs = tbgrs;
    });
  }

}
