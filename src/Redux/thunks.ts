import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppStateType } from "./store";


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action<string>>
