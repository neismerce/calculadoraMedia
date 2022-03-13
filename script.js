
function calcular() {
  var nome = "Lindineis"
  var NotaDoPrimeiroBimestre = parseInt(document.getElementById("media1").value)
  var NotaDoSegundoBimestre = parseInt(document.getElementById("media2").value)
  var NotaDoTerceiroBimestre = parseInt(document.getElementById("media3").value)
  var NotaDoQuartoBimestre = parseInt(document.getElementById("media4").value)

  var resultado = document.getElementById("result")
  var parabens = document.getElementById("parabens")
console.log(NotaDoPrimeiroBimestre)
  var notaFinal = (NotaDoPrimeiroBimestre + NotaDoSegundoBimestre + NotaDoTerceiroBimestre + NotaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

resultado.innerHTML=notaFixada
  resultado.style.color="white"
 
if (notaFixada>5) {
  parabens.innerHTML = "Parabéns, você foi aprovado!"
} else  {
  parabens.innerHTML = "Você foi reprovado!"
  
}
  document.getElementById("parabens").style.color="white"
  
//se não for maior faça isso  
  
  
}




// revisão: 
// variáreis, stringsconsole.log, tofixed, operações matemáticas e console


