import { SlipAction, SlipActionTypes, TbgrAction, TbgrActionTypes } from '../actions/add-slip.actions';
import { Slip } from "../models/add-slip.model";
import { Tbgr } from "../models/add-tbgr.model";

export interface SlipState{
    list: Slip[],
    error: Error
}

export interface TbgrState{
    list: Tbgr[],
    error: Error
}

const initialtbgrState : TbgrState = {
    list: [],
    error : undefined
}

const initialslipState : SlipState = {
    list: [],
    error : undefined
}

export function SlipReducer(
    state : SlipState = initialslipState,
    action:SlipAction,
    ){
    switch(action.type){
        case SlipActionTypes.ADD_SLIP:
            return {...state}
        case SlipActionTypes.ADD_SLIP_SUCCESS:
            return {...state,list: [...state.list, action.payload]}
        case SlipActionTypes.ADD_SLIP_FAILURE:
            return {...state,error : action.payload}
        case SlipActionTypes.LOAD_SLIP:
            return {...state}
        case SlipActionTypes.LOAD_SLIP_SUCCESS:
            return {...state,list : action.payload}
        case SlipActionTypes.LOAD_SLIP_FAILURE:
            return {...state,error : action.payload}
        default:
            return state;
    }

    
}

export function TbgrReducer(
    state : TbgrState = initialtbgrState,
    action:TbgrAction,
    ){
    switch(action.type){
        case TbgrActionTypes.ADD_TBGR:
            return {...state}
        case TbgrActionTypes.ADD_TBGR_SUCCESS:
            return {...state,list: [...state.list, action.payload]}
        case TbgrActionTypes.ADD_TBGR_FAILURE:
            return {...state,error : action.payload}
        case TbgrActionTypes.LOAD_TBGR:
            return {...state}
        case TbgrActionTypes.LOAD_TBGR_SUCCESS:
            return {...state,list : action.payload}
        case TbgrActionTypes.LOAD_TBGR_FAILURE:
            return {...state,error : action.payload}
        default:
            return state;
    }
}