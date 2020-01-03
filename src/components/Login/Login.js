import React from 'react'
import { connection } from '../../constants/connection';
import useForm from '../../hooks/useForm';

const Login = (props) => {
    const storageKey = props && props.tokenKey || 'maplytic.token';

    const login = () => {
        var bodyFormData = new FormData();

        bodyFormData.set('username', values.username);
        bodyFormData.set('password', values.password);
        console.log(bodyFormData);

        connection.post('/login', `username=${values.username}&password=${values.password}`, { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } })
            .then((response) => {
                console.log(response.headers);
            })
            .catch((error) => {
                console.log(error);
            });


    }
    const { values, handleChange, handleSubmit } = useForm(login);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={values.username} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )

}

export default Login;