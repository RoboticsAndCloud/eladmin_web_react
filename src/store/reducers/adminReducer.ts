import {frameReducer} from "./frameReducer";
import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {AdminState} from "../states/adminState";
import {AdminAction} from "../actions/adminAction";

export const adminReducer = combineReducers<AdminState, AdminAction>({
    loginState: loginReducer,
    frameState: frameReducer,
})