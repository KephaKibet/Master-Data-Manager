import { authReducer } from "./auth.reducer";




export interface AppStateInterface {
    auth: AppStateInterface,

}

export const appReducer = {
    auth: authReducer,

}
