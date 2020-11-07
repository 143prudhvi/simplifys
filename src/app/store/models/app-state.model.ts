import { BoardState, VillageState, GradeState, ContactState } from '../reducers/root.reducer';
import { SlipState, TbgrState} from '../reducers/slip.reducer';


export interface SlipInterfaceState{
    readonly slip : SlipState,
    readonly tbgr : TbgrState
};

export interface rootInterfaceState{
    readonly board : BoardState,
    readonly village : VillageState,
    readonly grade : GradeState,
    readonly contact : ContactState,
};