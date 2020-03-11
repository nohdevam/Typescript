(function(){
const formation ={
    duree : 2,
    unite : "mois",
    sujet : "javascript",
    matieres : ["node", "ajax", "typescript"]
}

const phrase = `la formation en ${formation.sujet} dure ${formation.duree} ${formation.unite} et dispose de ${formation.matieres.length} matières`;
console.log(phrase);
})() 