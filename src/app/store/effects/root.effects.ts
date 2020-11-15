import { Injectable } from '@angular/core';
import {Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared.service';
import {LoadBoardAction, LoadBoardFailureAction, LoadBoardSuccessAction, BoardActionTypes, 
    LoadVillageAction, LoadVillageFailureAction, LoadVillageSuccessAction, VillageActionTypes,
    LoadContactAction, LoadContactFailureAction, LoadContactSuccessAction, ContactActionTypes,
    LoadGradeAction, LoadGradeFailureAction, LoadGradeSuccessAction, GradeActionTypes, AddContactAction, AddContactSuccessAction, AddContactFailureAction, DeleteContactAction, DeleteContactSuccessAction, DeleteContactFailureAction, UpdateContactAction, UpdateContactSuccessAction, UpdateContactFailureAction, LoadDataAction, DataActionTypes, LoadDataSuccessAction, LoadDataFailureAction } from '../actions/root.actions';

@Injectable()
export class rootEffects{

    @Effect() loadBoard$ = this.actions
    .pipe(
        ofType<LoadBoardAction>(BoardActionTypes.LOAD_BOARD),
        mergeMap(
            () => this.service.getBoardsList ()
            .pipe(
                map((boards:any) => new LoadBoardSuccessAction(boards)),
                catchError(error => of(new LoadBoardFailureAction(error))),
            )
        )
    )

    @Effect() loadVillage$ = this.actions
    .pipe(
        ofType<LoadVillageAction>(VillageActionTypes.LOAD_VILLAGE),
        mergeMap(
            () => this.service.getVillagesList ()
            .pipe(
                map((villages:any) => new LoadVillageSuccessAction(villages)),
                catchError(error => of(new LoadVillageFailureAction(error))),
            )
        )
    )

    @Effect() loadGrade$ = this.actions
    .pipe(
        ofType<LoadGradeAction>(GradeActionTypes.LOAD_GRADE),
        mergeMap(
            () => this.service.getGradesList ()
            .pipe(
                map((grades:any) => new LoadGradeSuccessAction(grades)),
                catchError(error => of(new LoadGradeFailureAction(error))),
            )
        )
    )

    @Effect() loadContact$ = this.actions
    .pipe(
        ofType<LoadContactAction>(ContactActionTypes.LOAD_CONTACT),
        mergeMap(
            () => this.service.getContactsList ()
            .pipe(
                map((contacts:any) => new LoadContactSuccessAction(contacts)),
                catchError(error => of(new LoadContactFailureAction(error))),
            )
        )
    )

    @Effect() addContact$ = this.actions
    .pipe(
        ofType<AddContactAction>(ContactActionTypes.ADD_CONTACT),
        mergeMap(
            (data) => this.service.addContact (data.payload)
            .pipe(
                map(() => new AddContactSuccessAction(data.payload)),
                catchError(error => of(new AddContactFailureAction(error))),
            )
        )
    )

    @Effect() updateContact$ = this.actions
    .pipe(
        ofType<UpdateContactAction>(ContactActionTypes.UPDATE_CONTACT),
        mergeMap(
            (data) => this.service.updateContact (data.payload)
            .pipe(
                map(() => new UpdateContactSuccessAction(data.payload)),
                catchError(error => of(new UpdateContactFailureAction(error))),
            )
        )
    )

    @Effect() deleteContact$ = this.actions
    .pipe(
        ofType<DeleteContactAction>(ContactActionTypes.DELETE_CONTACT),
        mergeMap(
            (data) => this.service.deleteContact(data.payload)
            .pipe(
                map(() => new DeleteContactSuccessAction(data.payload)),
                catchError(error => of(new DeleteContactFailureAction(error))),
            )
        )
    )

    @Effect() loadData$ = this.actions
    .pipe(
        ofType<LoadDataAction>(DataActionTypes.LOAD_DATA),
        mergeMap(
            () => this.service.getData ()
            .pipe(
                map((data:any) => new LoadDataSuccessAction(data)),
                catchError(error => of(new LoadDataFailureAction(error))),
            )
        )
    )

    constructor(private actions: Actions, private service: SharedService){

    }

}