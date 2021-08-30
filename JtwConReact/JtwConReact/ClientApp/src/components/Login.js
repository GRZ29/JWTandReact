import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useStore } from '../stores/store';

const Login  = () => {
    
	const { userStore } = useStore();

    const history = useHistory();
    const [form, setForm] = useState({
		username: '',
		password: ''
	});

    const handleChange = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	}

    const iniciarSesion = async () => {
		await userStore.login(form)
		history.push('/');
	}

	useEffect(() => {
		
	}, [])

    return (
        <div>
            <Container ms="4">
			<div className="containerPrincipal">
				<div className="containerLogin">
					<div className="form-group">
						<div>
						{/* {
							stateVariable[0]
						} */}
						</div>
						<label>Usuario: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="username"
							onChange={handleChange}
						/>
						<br />
						<label>Contraseña: </label>
						<br />
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={handleChange}
						/>
						<br />
						<button className="btn btn-primary" onClick={iniciarSesion}>Iniciar Sesión</button>
					</div>
				</div>
			</div>
		</Container>
        </div>
    );
};

export default Login ;