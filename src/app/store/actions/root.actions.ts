import { Action } from '@ngrx/store';
import { Board , Contact} from '../models/board.model'; 
import { Village } from '../models/village.model';
import { Grade } from '../models/grade.model'; 

export enum BoardActionTypes{
    LOAD_BOARD = '[BOARD] Load Board',
    LOAD_BOARD_SUCCESS = '[BOARD] Load Board Success',
    LOAD_BOARD_FAILURE = '[BOARD] Load Board Failure',
}

export class LoadBoardAction implements Action{
    readonly type = BoardActionTypes.LOAD_BOARD;
}

export class LoadBoardSuccessAction implements Action{
    readonly type = BoardActionTypes.LOAD_BOARD_SUCCESS;

    constructor(public payload: Array<Board>){}
}

export class LoadBoardFailureAction implements Action{
    readonly type = BoardActionTypes.LOAD_BOARD_FAILURE;

    constructor(public payload:Error){}
}

export type BoardAction = LoadBoardAction 
|LoadBoardSuccessAction 
|LoadBoardFailureAction;


export enum VillageActionTypes{
    LOAD_VILLAGE = '[VILLAGE] Load Village',
    LOAD_VILLAGE_SUCCESS = '[VILLAGE] Load Village Success',
    LOAD_VILLAGE_FAILURE = '[VILLAGE] Load Village Failure',
}

export class LoadVillageAction implements Action{
    readonly type = VillageActionTypes.LOAD_VILLAGE;
}

export class LoadVillageSuccessAction implements Action{
    readonly type = VillageActionTypes.LOAD_VILLAGE_SUCCESS;

    constructor(public payload: Array<Village>){}
}

export class LoadVillageFailureAction implements Action{
    readonly type = VillageActionTypes.LOAD_VILLAGE_FAILURE;

    constructor(public payload:Error){}
}

export type VillageAction = LoadVillageAction 
|LoadVillageSuccessAction 
|LoadVillageFailureAction;


export enum GradeActionTypes{
    LOAD_GRADE = '[GRADE] Load Grade',
    LOAD_GRADE_SUCCESS = '[GRADE] Load Grade Success',
    LOAD_GRADE_FAILURE = '[GRADE] Load Grade Failure',
}

export class LoadGradeAction implements Action{
    readonly type = GradeActionTypes.LOAD_GRADE;
}

export class LoadGradeSuccessAction implements Action{
    readonly type = GradeActionTypes.LOAD_GRADE_SUCCESS;

    constructor(public payload: Array<Grade>){}
}

export class LoadGradeFailureAction implements Action{
    readonly type = GradeActionTypes.LOAD_GRADE_FAILURE;

    constructor(public payload:Error){}
}

export type GradeAction = LoadGradeAction 
|LoadGradeSuccessAction 
|LoadGradeFailureAction;

export enum ContactActionTypes{
    LOAD_CONTACT = '[CONTACT] Load Contact',
    LOAD_CONTACT_SUCCESS = '[CONTACT] Load Contact Success',
    LOAD_CONTACT_FAILURE = '[CONTACT] Load Contact Failure',
    ADD_CONTACT = '[CONTACT] Add Contact',
    ADD_CONTACT_SUCCESS = '[CONTACT] Add Contact Success',
    ADD_CONTACT_FAILURE = '[CONTACT] Add Contact Failure',
    UPDATE_CONTACT = '[CONTACT] Update Contact',
    UPDATE_CONTACT_SUCCESS = '[CONTACT] Update Contact Success',
    UPDATE_CONTACT_FAILURE = '[CONTACT] Update Contact Failure',
    DELETE_CONTACT = '[CONTACT] Delete Contact',
    DELETE_CONTACT_SUCCESS = '[CONTACT] Delete Contact Success',
    DELETE_CONTACT_FAILURE = '[CONTACT] Delete Contact Failure',
}

export class LoadContactAction implements Action{
    readonly type = ContactActionTypes.LOAD_CONTACT;
}

export class LoadContactSuccessAction implements Action{
    readonly type = ContactActionTypes.LOAD_CONTACT_SUCCESS;

    constructor(public payload: Array<Contact>){}
}

export class LoadContactFailureAction implements Action{
    readonly type = ContactActionTypes.LOAD_CONTACT_FAILURE;

    constructor(public payload:Error){}
}

export class AddContactAction implements Action{
    readonly type = ContactActionTypes.ADD_CONTACT;

    constructor(public payload:Contact){}
}

export class AddContactSuccessAction implements Action{
    readonly type = ContactActionTypes.ADD_CONTACT_SUCCESS;

    constructor(public payload:Contact){}
}

export class AddContactFailureAction implements Action{
    readonly type = ContactActionTypes.ADD_CONTACT_FAILURE;

    constructor(public payload:Error){}
}

export class UpdateContactAction implements Action{
    readonly type = ContactActionTypes.UPDATE_CONTACT;

    constructor(public payload:Contact){}
}

export class UpdateContactSuccessAction implements Action{
    readonly type = ContactActionTypes.UPDATE_CONTACT_SUCCESS;

    constructor(public payload:Contact){}
}

export class UpdateContactFailureAction implements Action{
    readonly type = ContactActionTypes.UPDATE_CONTACT_FAILURE;

    constructor(public payload:Error){}
}

export class DeleteContactAction implements Action{
    readonly type = ContactActionTypes.DELETE_CONTACT;

    constructor(public payload:number){}
}

export class DeleteContactSuccessAction implements Action{
    readonly type = ContactActionTypes.DELETE_CONTACT_SUCCESS;

    constructor(public payload:number){}
}

export class DeleteContactFailureAction implements Action{
    readonly type = ContactActionTypes.DELETE_CONTACT_FAILURE;

    constructor(public payload:Error){}
}

export type ContactAction = LoadContactAction 
|LoadContactSuccessAction 
|LoadContactFailureAction
|AddContactAction 
|AddContactSuccessAction 
|AddContactFailureAction
|UpdateContactAction 
|UpdateContactSuccessAction 
|UpdateContactFailureAction
|DeleteContactAction 
|DeleteContactSuccessAction 
|DeleteContactFailureAction;