var formulaire1 = document.getElementById("form1");
var prenom = document.forms[0].elements.PRENOM;
var nom = document.forms[0].elements.NOM;
var teleimg = document.forms[0].elements.telecharger;
var groupe = document.querySelector('select');
var texbio = document.getElementById("text-bio");
var chemin = document.forms[0].elements.telecharger.value;
//views
var formulaire2 = document.getElementById("form2");
var viewsUserNom = document.getElementById("user-nom");
var viewsUserPrenom = document.getElementById("user-prenom");
var viewsUserGroupe = document.getElementById("user-groupe");
var viewsNewsBio = document.getElementById("news-bio");
var viewsImg = document.getElementById("avatar-img");

//viewsmetier
var contavatar = document.querySelector(".div.conteneur-avatar")

//creation de l'objet #avatar-img
var Personne = {
    prenom: "",
    nom: "",
    groupe: "",
    textbio: "",
    src: ""
};

var TabPersonne = [];
// console.log(Personne.prenom);  groupe.value
function remplirdefaut() {
    document.forms[0].elements.PRENOM.value = "SERGE";
    document.forms[0].elements.NOM.value = "KASHALA";
    document.forms[0].elements.TEXTBIO.value = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos saepe maiores repellat, exercitationem et. Ipsa aspernatur vel suscipit nobis cupiditate recusandae iure, error praesentium, nesciunt nisi, id ex sunt?";
    document.forms[0].elements.telecharger.value;

};
remplirdefaut();

//Implementation de methodes
// contavatar.classList.remove('img');
function createImage() {
    var imge = document.createElement("img");
    imge.classList.add("imgAvatar");
    imge.src = teleimg.value;
}

function RemplirTabview() {
    Personne.nom = nom.value;
    Personne.prenom = prenom.value;
    Personne.groupe = groupe.value;
    Personne.textbio = texbio.value;
    Personne.src = teleimg.value;

    TabPersonne.push(Personne);
    return TabPersonne;
}

function Tocheck() {
    var resul = false;
    if (prenom.value != " " || nom.value != " " || groupe.value != " " ||
        texbio.value != " " || teleimg.value != " ") {
        RemplirTabview();
        resul = true;
    }
    return resul;
}


function addViews() {
    // console.log(Tocheck());
    if (Tocheck()) {
        for (let index = 0; index < TabPersonne.length; index++) {
            viewsUserNom.innerText = TabPersonne[index].nom;
            viewsUserPrenom.innerText = TabPersonne[index].prenom;
            viewsUserGroupe.innerText = TabPersonne[index].groupe;
            viewsNewsBio.innerText = TabPersonne[index].textbio;
            viewsImg.innerText = TabPersonne[index].src;

        }
        // viewsUserNom.innerText = nom.value;
        // viewsUserPrenom.innerText = prenom.value;
        // viewsUserGroupe.innerText = groupe.value;
        // viewsNewsBio.innerText = texbio.value;
        // viewsImg.innerText = teleimg.value;


        if (teleimg.files && teleimg.files[0]) {
            teleimg.src = URL.createObjectURL(teleimg.files[0]);
            viewsImg.src = teleimg.src;
        }

    } else {
        alert("Veuillez remplir tous les champs");
    }

}


formulaire1.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(viewsImg.src);
    this.classList.add("img");

    addViews();


})