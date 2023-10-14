let p1 = document.getElementById('Senha1')
let p2 = document.getElementById('Senha2')
let p = document.getElementById('card')

var Nome1 = "Ângelo_33086664"
var Nome2 = "Maria_33450242"
function validarSenha(senha) {
    const comprimentoMinimo = 6;
    const caractereEspecial = /[_@#$%&*]/;
    const maiuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const numero = /\d/;
    const sequenciaNumerica = /(012|123|234|345|456|567|678|789)/;
    const sequenciaDecrescenteNumerica = /(987|876|765|654|543|432|321|210)/;
    const repeticaoCaractere = /([A-Za-z\d_@#$%&*])\1{2}/;



    if (senha.value.length < comprimentoMinimo) {
        p.innerHTML = `Existe um tamaho minimo de 6  digitos`
        return false
    }
    else if (!caractereEspecial.test(senha.value)) {
        p.innerHTML = `Tem que colocar uma letra especial`
        return false
    }
    else if (!maiuscula.test(senha.value)) {
        p.innerHTML = `Tem que colocar uma letra Maiuscula`
        return false
    }
    else if (!minuscula.test(senha.value)) {
        p.innerHTML = `Tem que colocar uma letra Minuscula`
        return false
    } else if (!numero.test(senha.value)) {
        p.innerHTML = `Tem que colocar um numero`
        return false
    } else if (sequenciaNumerica.test(senha.value)) {
        p.innerHTML = `Sem sequencia amigo`
        return false
    } else if (sequenciaDecrescenteNumerica.test(senha.value)) {
        p.innerHTML = `Sem sequencia decrescente amigo`
        return false
    }
    else if (repeticaoCaractere.test(senha.value)) {
        p.innerHTML = `Sem repetir caracter amigo`
        return false
    }
    return true

}



const n1 = p1;
const n2 = p2;

function comparar() {
    if (n1.value == Nome1 && n2.value == Nome2) {
        p.innerHTML = `Criadores ok`
    }
    else if (n1.value != n2.value) {
        console.log("Tem que ser iguais")
        p.innerHTML = `Tem que ser iguais`

    }
    else if (n1.value && n2.value != "") {

        var a = validarSenha(n1)
        var b = validarSenha(n2)

        if (a == true && b == true) {
            console.log("Senha aceita")
            p.innerHTML = `Senha aceita`
        }

    }
    else {
        console.log("Insira algo") 
        p.innerHTML = `Insira algo`
    }
}

