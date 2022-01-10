const calcular = document.getElementById('calcular');

function montante () {
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const tempo = document.getElementById('tempo').value;
    const inicial = document.getElementById('inicial').value;
    const jurosreal = juros/100;
    const juros2 = 1+jurosreal;
    const elevacao = Math.pow(juros2,tempo);
    const cima = elevacao-1;
    const baixo = (valor-inicial)*jurosreal;
    const final = (baixo/cima).toFixed(2);


        resultado.textContent = `O valor de investimento por mês = R$ ${final}`;
        
    }
    



