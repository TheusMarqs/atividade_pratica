function moedaDois(m2) {
    btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'dolar':
            btn2.textContent = 'Dólar';
            break;

        case 'euro':
            btn2.textContent = 'Euro';
            break;

        case 'libra':
            btn2.textContent = 'Libra';
            break;
    }
}


function Calcular() {
    var valor = parseFloat(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');
    var cambio = parseFloat(document.getElementById('cambio').value);
    var valorFinal = valor * cambio;

    resultado.value = valorFinal.toFixed(2);

}