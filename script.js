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
    var cambioLibra = parseFloat(document.getElementById('cambioLibra').value);
    var cambioDolar = parseFloat(document.getElementById('cambioDolar').value);
    var cambioEuro = parseFloat(document.getElementById('cambioEuro').value);
    var valorLibra = valor / cambioLibra;
    var valorDolar = valor / cambioDolar;
    var valorEuro = valor / cambioEuro;

    resultado.value = 'Libra: ' + valorLibra.toFixed(2) + ' / Dólar: ' + valorDolar.toFixed(2) + ' / Euro: ' + valorEuro.toFixed(2);

}