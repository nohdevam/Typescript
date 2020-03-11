export

class Page{
    constructor(
        private titre: string,
        private contenu: string,
        private categories: string[]){}
            
        genererHTML() : string{
            let output: string = 
                `<div>
    <h1>${this.titre}</h1>
    <p>${this.contenu}</p>
    <ul>`
     for (let i: number = 0; i < this.categories.length; i++){
       output += `<li>${this.categories[i]}</li>`}
       output += `
    </ul>
<div>`;
         return output;   
        }
}

const page1 = new Page("Home page", "lorem ipsum", ["ajax", "node", "angular"]);

console.log(page1.genererHTML());