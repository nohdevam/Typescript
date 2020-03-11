// 1
/* ce fichier contient
1 une interface Profil avec 3 proprietes
id nombre
nom : chaine de caractère
pays : chaine de caractère */
// 2 
/* 2 une collection nommée annuaire contient trois profils utilisateurs
id  nom         pays
1   Alain       France
2   Béatrice    Belgique
3   Charles     France
*/
var annuaire = [
    {
        id: 1,
        nom: "Alain",
        pays: "France"
    },
    {
        id: 2,
        nom: "Béatrice",
        pays: "Belgique"
    },
    {
        id: 3,
        nom: "Charles",
        pays: "France"
    },
];
// 3
/* 3 une fonction filtreParPays
    deux arguments
        annuaire type tableau de profil
        paysRecherche type chaine de caractère
    retourne type tableau de profil

    traitements dans la fonction
        retourner tous les profils d'un pays donné  */
function filtreParPays(annuaire, paysRecherche) {
    var resultat = [];
    // fair eune boucle sur annuaire
    for (var i = 0; i < annuaire.length; i++) {
        // verifier si l'item dispose de la valeur
        if (annuaire[i].pays == paysRecherche) {
            //si ok push() dans resultat
            resultat.push(annuaire[i]);
        }
    }
    return resultat;
}
// utiliser ma collection et ma fonction
var recherche = filtreParPays(annuaire, "Belgique");
console.log(recherche);
