import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTbgrAction, LoadTbgrAction } from 'src/app/store/actions/add-slip.actions';
import { LoadBoardAction, LoadVillageAction } from 'src/app/store/actions/root.actions';
import { Tbgr } from 'src/app/store/models/add-tbgr.model';
import { rootInterfaceState, SlipInterfaceState } from 'src/app/store/models/app-state.model'
import { Board } from 'src/app/store/models/board.model';
import { Village } from 'src/app/store/models/village.model';

@Component({
  selector: 'app-add-tbgr',
  templateUrl: './add-tbgr.component.html',
  styleUrls: ['./add-tbgr.component.scss'],
})
export class AddTbgrComponent implements OnInit {

  newTbgr : Tbgr = { board: "", village:"", tbgr:null, name:"" }
  Boards$: Observable<Array<Board>>;
  Boards:Array<Board>
  Villages$: Observable<Array<Village>>;
  Villages:Array<Village>

  constructor(private rootstore: Store<rootInterfaceState>,private slipstore: Store<SlipInterfaceState>) {
    this.Boards$=this.rootstore.select(rootstore => rootstore.board.list);
    this.Villages$=this.rootstore.select(rootstore => rootstore.village.list);

    this.Boards$.subscribe(boards => {
      this.Boards = boards;
    });

    this.Villages$.subscribe(villages => {
      this.Villages = villages;
    });
   }

  ngOnInit() {
    this.slipstore.dispatch(new LoadTbgrAction());
    this.rootstore.dispatch(new LoadBoardAction());
    this.rootstore.dispatch(new LoadVillageAction());
  }

  OnRemove(){
    this.newTbgr={board: "", village:"", tbgr:null, name:"" };
  }

  addTbgrStore(){
    this.slipstore.dispatch(new AddTbgrAction(this.newTbgr));
    this.newTbgr={board: "", village:"", tbgr:null, name:"" };
  }
}
