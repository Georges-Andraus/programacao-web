
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
    let cpfparttern2 = /^\d{11}$/
    let cpfparttern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (cpf == "" ) {
        alert("O CPF nao pode estar vazio");
        return false;
    }
    if(!cpfparttern.test(cpf) && !cpfparttern2.test(cpf)){
        alert("O CPF deve siguir esse formato: 000.000.000-00 ou 00000000000");
        return false;
    }
    cpf = cpf.replace(/\D/g, '');
    if(!validateDV1(cpf) || !validateDV2(cpf)){
        alert("CPF invalido");
        return false;
    }
    return true;
}

function validateDV1(cpf) {
    let soma = 0;
    for(let i=1; i<=9; i++){
        soma += (cpf.charAt(i - 1) * (10 - (i - 1)));
    }
    console.log(soma);
    let resto = soma % 11;

    if(resto < 2){
        if(cpf.charAt(9) != 0){
            return false;
        }
    }

    let digitoVerificador = 11 - resto;
    if(digitoVerificador != cpf.charAt(9)){
        return false;
    }


    return true;
}
function validateDV2(cpf) {
    let soma = 0;
    for(let i=1; i<=10; i++){
        soma += (cpf.charAt(i - 1) * (11 - (i - 1)));
    }
    console.log(soma);
    let resto = soma % 11;

    if(resto < 2){
        if(cpf.charAt(10) != 0){
            return false;
        }
    }

    let digitoVerificador = 11 - resto;
    if(digitoVerificador != cpf.charAt(10)){
        return false;
    }


    return true;
}

function validateSenha(senha) {
    if (senha == "" ) {
        alert("A senha nao pode estar vazio");
        return false;
    }   
    return true;
}