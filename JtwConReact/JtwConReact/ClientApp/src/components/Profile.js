import React from 'react';
import { useStore } from '../stores/store.js';
import { observer } from 'mobx-react-lite'

function Profile() {

    const { userStore } = useStore();
    const { user, logout } = userStore;


    return (
        <div>
            <div>
                { user }
                <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
            </div>
        </div>
    )
 
}
 
export default observer(Profile);

