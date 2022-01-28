// Palidroma 

// Chiedere all’utente di inserire una parola 

// let parola = parseInt(prompt('Inserisci una parola'))
// let parolaDivisa;

// // Creare una funzione per capire se la parola inserita è palindroma

// function palindroma () {
//     if (parolaDivisa = parola.split('')) {
//         alert('la parola è palindroma')
//     }
// }

let parola = parseInt(prompt('Inserisci una parola'));
let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
}

function invertiParola(stringa){
  let parolaInversa = parola;

  for (let i = 0; i = stringa.length; i++) {
    parolaInversa += stringa[i];
    
  }

  return parolaInversa;
}
