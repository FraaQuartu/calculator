
// Funzione che assicura ci siano max cifre nel numero
const formatNumber = function(num, max) {
    let str_num = String(num);
  
    // Prendo parte intera e decimale
    let int,dec;
    [int, dec] = str_num.split('.');
    dec = dec == undefined ? 0 : dec;
  
    // Se cifre_intere + cifre_dec + 1 < max allora niente
    if(int.length + dec.length + 1 <= max) {
      return str_num;
    }
  
    // Se cifre_intere > cifre max allora notaz esp
    else if(int.length > max) { 
      return num.toExponential();
    }
  
    // Se cifre_intere == max o max-1 allora mostra solo parte intera
    else if(int.length == max || int.length == (max - 1)) {
      return parseInt(int);
    }
  
    // Altrimenti mostra parte intera, e prime (max - int - 1) cifre di parte dex
    else {
      return parseFloat(str_num.slice(0,max));
    }
  }
  
console.log (formatNumber(123154,5));