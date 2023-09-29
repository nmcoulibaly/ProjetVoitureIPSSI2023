import { useContext, useState } from "react";

import { Button, Form } from "react-bootstrap";

import InputMail from "../../core/components/forms/InputMail";

import { UserContext } from "../../core/contexts/AuthContext";

import { useNavigate } from "react-router";



const Login = () => {

    const [userLog, setUserLog] = useState({ email: '', password: '' });

    const [user, setUser] = useContext(UserContext);

    const navigate = useNavigate();



    const submit = (ev) => {

        ev.preventDefault();



        // Vérifier la complexité du mot de passe

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(userLog.password)) {

            alert("Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");

            return;

        }



        // Le mot de passe répond aux exigences, procédez à l'appel du serveur et à la redirection

        let u = { lastname: 'Le joueur de FOOT', firstname: 'Neymar', mail: userLog.email };

        setUser(u);

        sessionStorage.setItem('USER', JSON.stringify(u));

        navigate('/');

    }



    const changeFormField = (ev) => {

        const obj = { ...userLog };

        obj[ev.target.name] = ev.target.value;

        setUserLog(obj);

        console.log(obj);

    }



    return (

        <div className="form-container">

            <h1>Connexion</h1>

            <Form noValidate onSubmit={submit}>

                <Form.Group className="mb-3">

                    <InputMail label="Login" placeholder="Votre email"

                        onChange={changeFormField} name="email" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Mot de passe</Form.Label>

                    <Form.Control name="password" type="password" placeholder="Votre mot de passe" onChange={changeFormField} />

                </Form.Group>

                <Button variant="primary" type="submit">Se connecter</Button>

            </Form>



        </div>

    )

}



export default Login;