import { createContext, useContext } from 'react'
import  ApplicationStore from './applicationStore'
import  UserStore from './userStore'

export const store = {
    applicationStore: new ApplicationStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}