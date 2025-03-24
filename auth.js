function showLogin() {
    let user = prompt("Nom d'utilisateur :");
    let pass = prompt("Mot de passe :");
    if (localStorage.getItem(user) === pass) {
        alert("Connexion réussie !");
    } else {
        alert("Identifiants incorrects.");
    }
}

function showRegister() {
    let user = prompt("Choisissez un nom d'utilisateur :");
    let pass = prompt("Choisissez un mot de passe :");
    localStorage.setItem(user, pass);
    alert("Compte créé avec succès !");
}
