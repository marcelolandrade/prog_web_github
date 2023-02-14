function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    /*Função de inserir -- retorna um elemento que é identificado por um ID específico.*/
}
function clean() /*função para limpar a celula*/
{
    document.getElementById('resultado').innerHTML = "";
}
function calcular()/* função calcular*/
{
    var resultado = document.getElementById('resultado').innerHTML; /*elemento é uma referência a um objeto Element, ou null se um elemento com o ID especificado não estiver contido neste documento.
    idé uma string que difere casos e ocorrências representando o ID único do elemento sendo procurado */
    if(resultado) 
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
﻿