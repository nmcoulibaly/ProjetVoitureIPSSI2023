const InputPass = (ev) => {

    ev.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(userLog.password)) {

        alert("Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");

        return;

    }
    let u = {

        lastname: 'Le joueur de FOOT',

        firstname: 'Neymar',

        mail: userLog.email

    };

    setUser(u);

    sessionStorage.setItem('USER', JSON.stringify(u));

    navigate('/');

}



export default InputPass;