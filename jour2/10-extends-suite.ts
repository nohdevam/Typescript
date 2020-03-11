export

class Animal {
    constructor(protected nom:string, protected age: number){}

    description ():string{
        return `
        je suis un Animal,
        mon nom est ${this.nom}
        mon age est $${this.age}`;
    }
}

class Chat extends Animal {
    // ajoute une nouvelle propriété à ma class Enfant
    constructor(protected nom: string, protected age: number, protected couleur: string){
        super(nom, age); // fonction clé qui va permettre d'executer la construction d'un parent
        // récupèree les instructions du parent et on les modifies = polymorphisme
    }
    information(): string{
        return `
        je suis un chat mon nom est ${this.nom}
        mon age est ${this.age}
        ma couleur est ${this.couleur}`;
    }
}

const c = new Chat ("croquette", 4, "roux"); // surcharger la methode du parent = polymorphisme
console.log(c.description()); // methode du parent
console.log(c.information()); // methode de l'enfant

//tsc 10-extends-suite.ts && node 10-extends-suite.js