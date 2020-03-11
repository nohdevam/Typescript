export
class Page{
    constructor(public titre: string){

    }
    getTitre(): void{
        console.log(this.titre)
    }
}

const p = new Page("bonjour");
p.titre = "hello";

class Article extends Page{
    genererHTML(){
        this.getTitre()
        console.log(this.titre)
    }
}

const a = new Article("mon article")
a.getTitre()
a.genererHTML()
// attention vous pouvez utiliser d'autres mots clé que private
// PROTECTED / PUBLIC
// si vous avez choisi private = la variable ne peut être utilisée QUE DANS calss
// Protected = variable utilisable ds la class ainsi que dans les class qui herite de cette class
// Public = variable est utilisable n'importe ou