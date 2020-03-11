const phrase = "je découvre typsescript et la transpilation en javascript";

const tableau = phrase.split(" ");
console.log(tableau);
/* [
  'je',
  'découvre',
  'typsescript',
  'et',
  'la',
  'transpilation',
  'en',
  'javascript'
] 
*/

for (let i= 0 ; i < 4 ; i++){
    console.log(tableau[i]);
}
/* [
  'je',
  'découvre',
  'typsescript',
  'et',
  'la',
  'transpilation',
  'en',
  'javascript'
]
je
découvre
typsescript
et
*/

console.log(resultat.join(""));
 function decouperPhrase (phrase, nbMot){
     const tableau = phrase.split(" ");
     const resultat = [];

     for(let i = 0 ; i < nbMot ; i++){
         resultat.push(tableau[i]);
     }
     return resultat.join(" ");
 }

 const boutPhrase = decouperPhrase(phrase,3);
 console.log(boutPhrase);