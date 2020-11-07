import { Injectable } from '@angular/core';
import {Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared.service';
import { AddSlipAction, AddSlipActionFailure, AddSlipActionSuccess,
     LoadSlipAction, LoadSlipActionFailure, LoadSlipActionSuccess, SlipActionTypes,
     AddTbgrAction, AddTbgrActionFailure, AddTbgrActionSuccess,
      LoadTbgrAction, LoadTbgrActionFailure, LoadTbgrActionSuccess, TbgrActionTypes } from '../actions/add-slip.actions';

@Injectable()
export class SlipEffects{

    @Effect() loadSlip$ = this.actions
    .pipe(
        ofType<LoadSlipAction>(SlipActionTypes.LOAD_SLIP),
        mergeMap(
            () => this.service.getCardsList ()
            .pipe(
                map((slips:any) => new LoadSlipActionSuccess(slips)),
                catchError(error => of(new LoadSlipActionFailure(error))),
            )
        )
    )

    @Effect() addSlip$ = this.actions
    .pipe(
        ofType<AddSlipAction>(SlipActionTypes.ADD_SLIP),
        mergeMap(
            (data) => this.service.addCard(data.payload)
            .pipe(
                map(() => new AddSlipActionSuccess(data.payload)),
                catchError(error => of(new AddSlipActionFailure(error))),
            )
        )
    )

    @Effect() loadTbgr$ = this.actions
    .pipe(
        ofType<LoadTbgrAction>(TbgrActionTypes.LOAD_TBGR),
        mergeMap(
            () => this.service.getTbgrList ()
            .pipe(
                map(data => new LoadTbgrActionSuccess(data)),
                catchError(error => of(new LoadTbgrActionFailure(error))),
            )
        )
    )

    @Effect() addTbgr$ = this.actions
    .pipe(
        ofType<AddTbgrAction>(TbgrActionTypes.ADD_TBGR),
        mergeMap(
            (data) => this.service.addTbgr(data.payload)
            .pipe(
                map(() => new AddTbgrActionSuccess(data.payload)),
                catchError(error => of(new AddTbgrActionFailure(error))),
            )
        )
    )

    constructor(private actions: Actions, private service: SharedService){

    }

}