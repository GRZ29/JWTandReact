import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { store } from './store'

export default class UserStore {
    user = null;
    /**
     *
     */
    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn(){
        return !!this.user;
    }

    login = async (creds) => {
        try {
            const baseUrl = "https://localhost:44359/api/authenticate/login";
			let response = await axios.post(baseUrl, creds);

			let { token, usuario } = await response.data;
  
			store.applicationStore.setToken(token);
            runInAction(() => this.user = usuario);

        } catch (error) {
            console.log("Error =>", error);
        }
    }

    logout = () => {
        store.applicationStore.setToken(null);
        window.localStorage.removeItem('token');
        this.user = null;
    }

}
