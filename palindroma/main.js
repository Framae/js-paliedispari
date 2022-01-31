// Palidroma 

// Chiedere all’utente di inserire una parola 



// // Creare una funzione per capire se la parola inserita è palindroma

function checkPalindrome(wordUser) {
  
  let comparisonWord = wordUser.split('').reverse().join('');

  for (let i = wordUser.lenght - 1; i >= 0; i--) {
    comparisonWord += wordUser[i];
  }
    
  if (wordUser == comparisonWord) {
    alert('La parola è palindroma');
  } else {
    alert('La parola NON è palindroma');
  }
  return;
}


let wordUser = prompt('Inserisci parola');
let verify = checkPalindrome(wordUser);
console.log(verify);