var v1, v2;

function moedaUm(m1) {
    btn1 = document.getElementById('btn1');
    switch (m1) {
        case 'dolar':
            v1 = 'dolar';
            btn1.textContent = 'Dólar';
            break;

        case 'euro':
            v1 = 'euro';
            btn1.textContent = 'Euro';
            break;

        case 'real':
            v1 = 'real';
            btn1.textContent = 'Real';
            break;

        case 'libra':
            v1 = 'libra';
            btn1.textContent = 'Libra';
            break;
    }
}

function moedaDois(m2) {
    btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'dolar':
            v2 = 'dolar';
            btn2.textContent = 'Dólar';
            break;

        case 'euro':
            v2 = 'euro';
            btn2.textContent = 'Euro';
            break;

        case 'real':
            v2 = 'real';
            btn2.textContent = 'Real';
            break;

        case 'libra':
            v2 = 'libra';
            btn2.textContent = 'Libra';
            break;
    }
}


function Calcular() {
    valor = parseFloat(document.getElementById('valor').value);
    resultado = document.getElementById('resultado');

    if (v1 == 'dolar') {
        if (v2 == 'dolar') {
            resultado = valor;
        }

        if (v2 == 'euro') {
            resultado = valor * 0.92;
        }

        if (v2 == 'real') {
            resultado = valor * 5.01;
        }

        if (v2 == 'libra') {
            resultado = 0.81;
        }
    }
}