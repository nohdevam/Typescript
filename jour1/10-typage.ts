// javascript est un langage permissif au niveau des types

export // nouvelle syntaxe qui permet de bloquer la portée de toutes les variabes que l'on crée dans un fichier js
// au lieu d'écrire la fonction anonyme autoexécutante

let inconnue = any;

// variables complexes

//tableau qui contient des chaines de caractères

const semaine: string[] = ["lundi", "mardi", "mercredi"];
const parametre: any[] = [2, "lettre", true];

// 2eme syntaxe possible
const matieres: Array<string> = ["js", "php","ajax"];
const autreParametre: Array<any> = ["init", 12,[],{}];

// créer un objet simple
const fromation : Object[] = [
    {
        id: 1,
        nom: "article 1"
    }
]

const posts : Array<Object> = [
    {id:1},
    {id: 2, nom: "articles 2"} 
]
