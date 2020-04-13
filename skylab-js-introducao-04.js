function experiencia(anos) {
  if(anos == 0 || anos == 1){
    console.log("Iniciante")
    }
  else if (anos == 2 || anos == 3){
    console.log("intermediario")
    }
  else if (anos >= 4 && anos < 7){
    console.log("avançado")
    }
  else if (anos >= 7){
    console.log("mestre jedai")
    }
}
var anosEstudo = 7;
experiencia(anosEstudo);
