/*

  No código abaixo, a variável myLocalNumber é declarada usando a chave let.
  Isso significa que ele só existe dentro do bloco da if statement. 
  O impossibleCalculation não funcionará porque a variável myLocalNumber 
  não existe fora da if statement.

*/
var myGlobalNumber = 5;
  if (myGlobalNumber > 3) { 
    let myLocalNumber = 4; 
} 

/*

  Na linha de código abaixo, gerará um erro pois a
  variável local foi usada fora de seu escopo

*/ 
var impossibleCalculation = myGlobalNumber + myLocalNumber; 
