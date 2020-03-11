export

class Page{
titre: string;

constructor(
    t:string
)   {
        this.titre = t;
    }
}

// version compact
class Article{
    constructor (private titre: string, private auteur: string){}
        genererHTML(): string{
            const output : string = `<article>
            <h2>${this.titre}</h2>
            <p>${this.auteur}</p>
            </article>`;

            return output;
    }
}

const article1 = new Article("premier article", "Alain");
console.log(article1.genererHTML);
// PRIVATE = mot clé du langage var / cons...
// la variable dispose d'une portée locale (à la classe)

//tsc --removeComments 06-constructeur-compact.ts && 06-constructeur-compact.js