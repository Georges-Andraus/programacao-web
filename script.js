
function submeter() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value;
    
    if(!validateNome(nome) || !validateCPF(cpf) || !validateSenha(senha)){
        return;
    }
    console.log(nome);
    console.log(cpf);
    console.log(senha);
    console.log(validateNome(nome));
    console.log(validateCPF(cpf));

   
}



function validateNome(nome) {
    if (nome == "" ) {
        alert("O nome nao pode estar vazio");
        return false;
    }   
    return true;
}
function validateCPF(cpf) {
    cpf = cpf.trim();
    if (cpf == "" ) {
        alert("O CPF nao pode estar vazio");
        return false;
    }
    let cpfparttern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!cpfparttern.test(cpf)){
        alert("O CPF deve siguir esse formato: 000.000.000-00");
        return false;
    }
}

function validateSenha(senha) {
    if (senha == "" ) {
        alert("A senha nao pode estar vazio");
        return false;
    }   
    return true;
}