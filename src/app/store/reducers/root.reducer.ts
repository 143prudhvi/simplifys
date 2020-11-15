import { BoardAction, BoardActionTypes, VillageAction, VillageActionTypes, GradeAction, GradeActionTypes, ContactAction, ContactActionTypes, DataAction, DataActionTypes } from '../actions/root.actions';
import { Board, Contact } from "../models/board.model";
import { Village } from "../models/village.model";
import { Grade } from "../models/grade.model";
import { Data } from '@angular/router';

export interface BoardState{
    list: Board[],
    error: Error
}

export interface ContactState{
    list: Contact[],
    error: Error
}

export interface VillageState{
    list: Village[],
    error: Error
}

export interface GradeState{
    list: Grade[],
    error: Error
}

export interface DataState{
    list: Data[],
    error: Error
}

const initialdataState : DataState = {
    list: [],
    error : undefined
}

const initialgradeState : GradeState = {
    list: [],
    error : undefined
}

const initialcontactState : ContactState = {
    list: [],
    error : undefined
}


const initialboardState : BoardState = {
    list: [],
    error : undefined
}

const initialvillageState : VillageState = {
    list: [],
    error : undefined
}

export function BoardReducer(
    boardstate : BoardState = initialboardState,
    boardaction:BoardAction,
    ){
    switch(boardaction.type){
        case BoardActionTypes.LOAD_BOARD:
            return {...boardstate}
        case BoardActionTypes.LOAD_BOARD_SUCCESS:
            return {...boardstate,list : boardaction.payload}
        case BoardActionTypes.LOAD_BOARD_FAILURE:
            return {...boardstate,error : boardaction.payload}
        default:
            return boardstate;
    }

    
}


export function VillageReducer(
    villagestate : VillageState = initialvillageState,
    villageaction:VillageAction,
    ){
    switch(villageaction.type){
        case VillageActionTypes.LOAD_VILLAGE:
            return {...villagestate}
        case VillageActionTypes.LOAD_VILLAGE_SUCCESS:
            return {...villagestate,list : villageaction.payload}
        case VillageActionTypes.LOAD_VILLAGE_FAILURE:
            return {...villagestate,error : villageaction.payload}
        default:
            return villagestate;
    }
}



export function GradeReducer(
    gradestate : GradeState = initialgradeState,
    gradeaction:GradeAction,
    ){
    switch(gradeaction.type){
        case GradeActionTypes.LOAD_GRADE:
            return {...gradestate}
        case GradeActionTypes.LOAD_GRADE_SUCCESS:
            return {...gradestate,list : gradeaction.payload}
        case GradeActionTypes.LOAD_GRADE_FAILURE:
            return {...gradestate,error : gradeaction.payload}
        default:
            return gradestate;
    }
}


export function ContactReducer(
    contactstate : ContactState = initialcontactState,
    contactaction:ContactAction,
    ){
    switch(contactaction.type){
        case ContactActionTypes.LOAD_CONTACT:
            return {...contactstate}
        case ContactActionTypes.LOAD_CONTACT_SUCCESS:
            return {...contactstate,list : contactaction.payload}
        case ContactActionTypes.LOAD_CONTACT_FAILURE:
            return {...contactstate,error : contactaction.payload}
        case ContactActionTypes.ADD_CONTACT:
            return {...contactstate}
        case ContactActionTypes.ADD_CONTACT_SUCCESS:
            return {...contactstate,list: [...contactstate.list, contactaction.payload]}
        case ContactActionTypes.ADD_CONTACT_FAILURE:
            return {...contactstate,error : contactaction.payload}
        case ContactActionTypes.UPDATE_CONTACT:
            return {...contactstate}
        case ContactActionTypes.UPDATE_CONTACT_SUCCESS:
            return {...contactstate}
        case ContactActionTypes.UPDATE_CONTACT_FAILURE:
            return {...contactstate,error : contactaction.payload}
        case ContactActionTypes.DELETE_CONTACT:
            return {...contactstate}
        case ContactActionTypes.DELETE_CONTACT_SUCCESS:
            return {...contactstate, list : contactstate.list.filter(item => item.phone !== contactaction.payload),}
        case ContactActionTypes.DELETE_CONTACT_FAILURE:
            return {...contactstate,error : contactaction.payload}
        default:
            return contactstate;
    }
}

export function DataReducer(
    datastate : DataState = initialdataState,
    dataaction:DataAction,
    ){
    switch(dataaction.type){
        case DataActionTypes.LOAD_DATA:
            return {...datastate}
        case DataActionTypes.LOAD_DATA_SUCCESS:
            return {...datastate,list : dataaction.payload}
        case DataActionTypes.LOAD_DATA_FAILURE:
            return {...datastate,error : dataaction.payload}
        default:
            return datastate;
    }
}