/*

  É mais seguro usar variáveis locais do que as variáveis globais, 
  especialmente se as variáveis tiverem nomes semelhantes.
  
*/
var x = 17;
if (x > 10) {
  let x = 10;
}
print(x);