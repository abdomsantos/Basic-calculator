function calcular (tipo, valor){
    
    if(tipo == 'acao'){
        if(valor == 'c'){
            document.getElementById('resultado').value = ''
        }
        else if(valor == '.' || valor == '-' || valor == '+' || valor == '/' || valor == '*'){
            document.getElementById('resultado').value += valor
        }
        else if(valor == '='){
            var calculo = document.getElementById('resultado').value
            calculo = eval(calculo)
            document.getElementById('resultado').value = calculo
        }
        
    }
    else if(tipo == 'valor'){
        document.getElementById('resultado').value += valor
    }

}