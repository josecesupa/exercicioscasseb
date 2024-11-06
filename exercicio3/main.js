const usuarios = [
    { email: "ale@cesupa.br", senha: "123123", site: "https://www.cesupa.br" },
    { email: "pedro@giroto.com", senha: "223344", site: "https://www.detran.pa.gov.br" },
    { email: "isaac@java.com", senha: "asdasd", site: "https://www.idopterlabs.com" }
];

function validarLogin() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

    const usuarioEncontrado = usuarios.find(user => user.email === login && user.senha === senha);

    if (usuarioEncontrado) {
        window.location.href = usuarioEncontrado.site;
    } else {
        errorMessage.textContent = "Login ou senha incorretos.";
    }
}