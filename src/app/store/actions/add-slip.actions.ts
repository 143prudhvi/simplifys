import { Action } from '@ngrx/store';
import { Slip } from '../models/add-slip.model';
import { Tbgr } from '../models/add-tbgr.model';

export enum SlipActionTypes{
    ADD_SLIP = '[SLIP] Add Slip',
    ADD_SLIP_SUCCESS = '[SLIP] Add Slip Success',
    ADD_SLIP_FAILURE = '[SLIP] Add Slip Failure',
    LOAD_SLIP = '[SLIP] Load Slip',
    LOAD_SLIP_SUCCESS = '[SLIP] Load Slip Success',
    LOAD_SLIP_FAILURE = '[SLIP] Load Slip Failure',
}

export class AddSlipAction implements Action{
    readonly type = SlipActionTypes.ADD_SLIP;

    constructor(public payload:Slip){}
}

export class AddSlipActionSuccess implements Action{
    readonly type = SlipActionTypes.ADD_SLIP_SUCCESS;

    constructor(public payload:Slip){}
}

export class AddSlipActionFailure implements Action{
    readonly type = SlipActionTypes.ADD_SLIP_FAILURE;

    constructor(public payload:Error){}
}

export class LoadSlipAction implements Action{
    readonly type = SlipActionTypes.LOAD_SLIP;
}

export class LoadSlipActionSuccess implements Action{
    readonly type = SlipActionTypes.LOAD_SLIP_SUCCESS;

    constructor(public payload: Array<Slip>){}
}

export class LoadSlipActionFailure implements Action{
    readonly type = SlipActionTypes.LOAD_SLIP_FAILURE;

    constructor(public payload:Error){}
}

export type SlipAction = AddSlipAction 
|AddSlipActionSuccess
|AddSlipActionFailure 
|LoadSlipAction 
|LoadSlipActionSuccess 
|LoadSlipActionFailure;



export enum TbgrActionTypes{
    ADD_TBGR = '[TBGR] Add Tbgr',
    ADD_TBGR_SUCCESS = '[TBGR] Add Tbgr Success',
    ADD_TBGR_FAILURE = '[TBGR] Add Tbgr Failure',
    LOAD_TBGR = '[TBGR] Load Tbgr',
    LOAD_TBGR_SUCCESS = '[TBGR] Load Tbgr Success',
    LOAD_TBGR_FAILURE = '[TBGR] Load Tbgr Failure',
}

export class AddTbgrAction implements Action{
    readonly type = TbgrActionTypes.ADD_TBGR;

    constructor(public payload:Tbgr){}
}

export class AddTbgrActionSuccess implements Action{
    readonly type = TbgrActionTypes.ADD_TBGR_SUCCESS;

    constructor(public payload:Tbgr){}
}

export class AddTbgrActionFailure implements Action{
    readonly type = TbgrActionTypes.ADD_TBGR_FAILURE;

    constructor(public payload:Error){}
}

export class LoadTbgrAction implements Action{
    readonly type = TbgrActionTypes.LOAD_TBGR;
}

export class LoadTbgrActionSuccess implements Action{
    readonly type = TbgrActionTypes.LOAD_TBGR_SUCCESS;

    constructor(public payload: Array<Tbgr>){}
}

export class LoadTbgrActionFailure implements Action{
    readonly type = TbgrActionTypes.LOAD_TBGR_FAILURE;

    constructor(public payload:Error){}
}

export type TbgrAction = AddTbgrAction 
|AddTbgrActionSuccess
|AddTbgrActionFailure 
|LoadTbgrAction 
|LoadTbgrActionSuccess 
|LoadTbgrActionFailure;