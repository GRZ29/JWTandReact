const Salir = {
    cerrarSesion(){
        localStorage.removeItem('token_seguridad');
        localStorage.removeItem('usuario');
    }
};

export default Salir;
