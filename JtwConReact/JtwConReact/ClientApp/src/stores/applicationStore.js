import { makeAutoObservable, reaction } from "mobx"

export default class ApplicationStore {
    token = window.localStorage.getItem('token')

    constructor() {
        makeAutoObservable(this)
        reaction(
            () => this.token,
            token => {
                if(token){
                    window.localStorage.setItem('token', token)
                }else{
                    window.localStorage.removeItem('token')
                }
            }
        )
    }

    setToken = (token) => {
        this.token = token;
    }
}