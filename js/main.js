

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://g1.globo.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
    elemento.innerHTML="Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
    elemento.innerHTML="Passe o mouse aqui"
    //alert("Trocar texto");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


// function soma(n1,n2){
//     return n1+n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// function validaIdade(idade){
//     var validar;
//     if (idade>=18){
//         validar=true;
//     }else{
//         validar=false;
//     }
//     return validar;
// }

// var idade=prompt("Digite sua idade");
// console.log(validaIdade(idade));

// alert(soma(5,10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));



// var d=new Date();
// alert(d.getMonth()+1);
// alert(d.getHours());


// var count;
// for(count=0; count<=5; count++){
//     alert(count);
// }


// var count=0;
// while (count<5){
//     console.log(count);
//     //count=count+1;
//     count++;
// }


// var idade=prompt("Digite sua idade");
// if (idade>=18) {
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }


// var frutas=[{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas[0].nome);
// alert(frutas[1].cor);


// var fruta={nome:"maçã", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);


// var lista = ["maçã","pera","laranja"];
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.toString()[2]);
// console.log(lista.join(" - "));


// var nome = "Paulo Nakashima"
// var idade = 43;
// var idade2 = 10;
// var frase = "Brasil é o melhor time do mundo";
// //alert(nome + " tem " + idade + " anos");
// //alert(idade+idade2);
// console.log(nome);
// console.log(idade+idade2);
// console.log(frase.replace("Brasil","Corinthians"));
// console.log(frase.toUpperCase());
// //console.log(frase.toLowerCase());
// //alert(frase.replace("Brasil","Corinthians"));