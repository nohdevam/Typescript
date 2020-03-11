export

class Page{
    constructor(protected titre:string, protected contenu:string){}

    Description(): string{
        return `<article>
    <h2>${this.titre}</h2>
    <p>${this.contenu}</h2>
</article>`
    }
}

class Article extends Page{
    constructor(protected titre:string,
        protected contenu: string,
        private categories: Array<string>){
            super(titre, contenu);
        }
        Html(): string{
            let output: string = 
            `<article>
            <h2>${this.titre}</h2>
            <p>${this.contenu}</h2>
            <ul>
            `
            for(let item of this.categories){
                output += `<li>${this.categories}</li>`}
                output += 
                `</ul>
                </article>`;
                return output;
        }
    }

    const p = new Page ("page d'accueil", "contenu de la page d'accueil");
    console.log(p.Html());
    const a = new Article ("Blog", "page de présentation", ["photoshop", "illustrator"]);
    console.log(a.Html());

    //tsc 11-exos.ts && node 11-exos.js
     