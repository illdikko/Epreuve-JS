window.onload = function () {

    //variables des éléments

    let html_enonce = document.getElementById("enonce");
    html_enonce.hidden = true;

    let html_form = document.getElementById("inscription");

    let html_resultats = document.getElementById("result");
    html_resultats.hidden = true;

    let html_enfants = document.getElementById("enfants");

    //variables des boutons

    let html_ajout = document.getElementById("ajout_enfant");
    let html_supprimer = document.getElementById("supprimer_enfant");
    let html_enregistrer = document.getElementById("enregistrer");
    let html_retour = document.getElementById("retour");

    // //variables autres

    let enfant_nbr = 1
    // let enfant_fieldset = document.getElementById(enfant_1).innerHTML; Essaie de copie du HTML existant mais non réussi.




    // mes fonctions 

    // Masquer ou afficher les formulaires ou les résultats
    const masquerFormulaire = function () {
        html_form.hidden = true;
        html_resultats.hidden = false;
    }
    html_enregistrer.onclick = masquerFormulaire;


    const masquerResultats = function () {
        html_resultats.hidden = true;
        html_form.hidden = false;
    }
    html_retour.onclick = masquerResultats;

    // ajout et suppression d'enfants

    const ajouterEnfant = function () {
        enfant_nbr++;
        let enfant_fieldset = document.createElement("fieldset");
        enfant_fieldset.id = "Enfant" + enfant_nbr;
        let enfant_legend = document.createElement("legend");
        enfant_legend.innerHTML = "Enfant" + enfant_nbr;
        enfant_fieldset.appendChild(enfant_legend);

        let div1 = document.createElement("div");
        let label1 = document.createElement("label");
        label1.innerHTML = "Nom :";
        let input1 = document.createElement("input");
        input1.setAttribute('type', 'text')
        div1.append(label1, input1);

        let div2 = document.createElement("div");
        let label2 = document.createElement("label");
        label2.innerHTML = "Prénom :";
        let input2 = document.createElement("input");
        input2.setAttribute('type', 'text')
        div2.append(label2, input2);

        let div3 = document.createElement("div");
        let label3 = document.createElement("label");
        label3.innerHTML = "Date de naissance :";
        let input3 = document.createElement("input");
        input3.setAttribute('type', 'date')
        div3.append(label3, input3);

        enfant_fieldset.append(div1, div2, div3);

        html_enfants.appendChild(enfant_fieldset);
        // console.log("J'ai ajouté un enfant");    
    }

    html_ajout.onclick = ajouterEnfant;

    const supprimerEnfant = function () {
        enfant_nbr--;
        html_enfants.removeChild(html_enfants.lastChild);
        // console.log("J'ai supprimé un enfant");

    }

    html_supprimer.onclick = supprimerEnfant;

    // création de la liste de résultats

    const afficher_resultats = function (){
        let liste_parents = document.createElement("ul");
        let parent1 = getElementById("parent_1");
        let parent2 = getElementById("parent_2");




    }

    html_enregistrer.onclick = afficher_resultats;
}

