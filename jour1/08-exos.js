(function () {
    var formation = {
        duree: 2,
        unite: "mois",
        sujet: "javascript",
        matieres: ["node", "ajax", "typescript"]
    };
    var phrase = "la formation en " + formation.sujet + " dure " + formation.duree + " " + formation.unite + " et dispose de " + formation.matieres.length + " mati\u00E8res";
    console.log(phrase);
})();
