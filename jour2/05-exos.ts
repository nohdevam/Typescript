export

class Telephone{
    annee: number;
    marque: string;
    proprietaire: string;
    annuaire:Array<string>;

    constructor( // pas de VOID dans constructor
        annee:number,
        marque:string,
        prop: string,
        annuaire:string[] // ou Array<string>;
    ){
        this.annee = annee;
        this.marque = marque;
        this.proprietaire = prop;
        this.annuaire = annuaire;
        console.log(this.annee,
            this.marque,
            this.proprietaire,
            this.annuaire);
    }
}

const t = new Telephone(2020, "Iphone", "Edouard",["ok"]);