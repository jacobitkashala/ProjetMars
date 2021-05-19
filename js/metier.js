let formulaire1 = document.getElementById("form1");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let groupe = document.getElementById('groupe');
let texbio = document.getElementById("text-bio");
let imgView = document.getElementById("avatar-img");

let inputFile = document.getElementById("telecharger");
let btnreinit =document.getElementById("btn-reinit");

btnreinit.onclick=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    prenom.value="";
    nom.value="";
    texbio.value="";
    console.dir(nom.value);
}

let person = {
    prenom: "",
    nom: "",
    groupe: "",
    textBio: "",
    src: "Image/avatar.svg",
    test: false,

};

var Tabperson = [{
    prenom: "",
    nom: "",
    groupe: "",
    textbio: "",
    src: "",
    
}];

(function remplissageDef() {
    prenom.value = "Joe";
    nom.value = "mbaki";
    texbio.value = "Lorem ipsum dolor sit?";

})();

function Tocheck(prenom, nom, groupe, texbio, person) {

    let resultat = person;
    if (prenom.value != "" && nom.value != "" && texbio.value != "") {
        person.prenom = prenom.value;
        person.nom = nom.value;
        person.groupe = groupe.value;
        person.textBio = texbio.value;
        person.test = true;
    } else {
    
       alert("remplir les champs");

    }
    return resultat;
}
try {
    if (person.test) {
        (function downloadImg() {

            inputFile.addEventListener('change', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (inputFile.files && inputFile.files[0]) {
                    // const element = document.getElementById("photoProfil")
                    imgView.src = URL.createObjectURL(inputFile.files[0])
                    imgView.style.backgroundSize = "cover"
                    person.src = imgView.src;
                }
            });
        })();
    }
} catch (error) {
    console.log("error" + error);
}

function creatModel(personne) {

    var ConteneurAvatar = document.querySelector('#form2 div#conteneur');

    var divitems = document.createElement('div');
    divitems.className = "conteneur-item";

    var btndelete = document.createElement('button');
    btndelete.className = "deleteclass";
    btndelete.id="iddelete";
    btndelete.addEventListener("click", onclick);

    var tableViews = document.createElement('table');
    tableViews.className = "tableview";
    tableViews.id="idtable";

    var tr13 = document.createElement('tr');
    var donne13 = document.createElement('td');

    donne13.setAttribute("rowspan", "3");
    donne13.className = "conteneur-avatar";

    var imgeprofil = document.createElement('img');
    imgeprofil.id = "avatar-img";
    imgeprofil.classList.add("imgprofil");
    imgeprofil.alt = "profil";
    imgeprofil.setAttribute('src',personne.src);

    donne13.appendChild(imgeprofil);

    tr13.appendChild(donne13);

    var donne12 = document.createElement('td');
    donne12.id = "user-nom";
    donne12.innerText = "NOM: " +personne.nom;

    tr13.appendChild(donne12);

    var donne13 = document.createElement('td');
    donne13.id = "user-prenom";
    donne13.innerText = "Prenom :" +personne.prenom;

    tr13.appendChild(donne13);

    tableViews.appendChild(tr13);

    var tr23 = document.createElement('tr');
    var donne23 = document.createElement('td');
    donne23.id = "user-groupe";
    donne23.setAttribute("colspan", "2");
    donne23.innerText = "GROUPE:" +personne.groupe;
    tr23.appendChild(donne23);

    tableViews.appendChild(tr23);

    var tr33 = document.createElement('tr');
    var donne33 = document.createElement('td');
    donne33.id = "user-groupe";
    donne33.setAttribute("colspan", "2");
    donne33.innerText = "BIOGRAPHIE:" +personne.textBio;
    tr33.appendChild(donne33);

    tableViews.appendChild(tr33);

    divitems.appendChild(tableViews);
    divitems.appendChild(btndelete);

    ConteneurAvatar.appendChild(divitems);

    //  btndelete.onclick=(event)=>{
    //      event.defaultPrevented();
    //      console.log("supprime"+event);
    //      console.log("supprime");
    //  }
    return ConteneurAvatar;
}
const deleteElement=(event)=>{
    event.preventDefault();
    let cartContact=event.path[1];
    cartContact.remove()
    
}


function showContact() {
    newPerson = Tocheck(prenom, nom, groupe, texbio, person);
    Tabperson.push(newPerson);
    let btndelete= creatModel(newPerson).lastChild.lastChild;

    btndelete.onclick=deleteElement;
}
formulaire1.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showContact();
   
})