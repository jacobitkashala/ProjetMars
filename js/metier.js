let formulaire1 = document.getElementById("form1");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let groupe = document.getElementById('groupe');
let texbio = document.getElementById("text-bio");
let imgView = document.getElementById("avatar-img");
let inputRecherche = document.getElementById("rechercheinput");

let inputFile = document.getElementById("telecharger");
let btnreinit =document.getElementById("btn-reinit");

btnreinit.onclick=(event)=>{

    event.preventDefault();
    event.stopPropagation();
    prenom.value="";
    nom.value="";
    texbio.value="";
}

let infoContact = {src:""};
let dbContact=[];
let contacts = [];
let contactsRecherche=[];


function Tocheck(prenom, nom, groupe, texbio) {
    let contact={
        prenom:"",
        nom :"",
        groupe:"",
        bio:"",
    }
    if (prenom.value != "" && nom.value != ""&& texbio.value != "" && groupe.value != "") {
        contact.prenom= prenom.value;
        contact.nom= nom.value;
        contact.groupe = groupe.value;
        contact.bio= texbio.value;

        groupe.classList.remove('danger');
        prenom.classList.remove('danger');
        nom.classList.remove('danger');
        texbio.classList.remove('danger');
        
        return contact;
    
    } else {
        if( groupe.value === "") { groupe.classList.add('danger');}
        if( prenom.value === "") { prenom.classList.add('danger');}
        if( nom.value === "") {nom.classList.add('danger');}
        if( texbio.value === "") {texbio.classList.add('danger');}    
    }
    
}

inputFile.onchange=(e)=>{
    const file=e.target.files[0];
        
    if(file && file.type.substr(0,5)==="image"){
        
        const reader=new FileReader();
        reader.readAsDataURL(file);
      
        reader.onload=()=>{
            imgView.src = reader.result;
         }
    }
    
}

inputRecherche.oninput=(event)=>{
    
    let value=event.target.value;

    if(modelContacts.length != 0){
      let result= modelContactsneReche.filter(person =>person.prenom.toLowerCase().includes(value.toLowerCase()) );
        
   // console.log(result)
    }
}

function creatModel(contact) {
   
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
    imgeprofil.setAttribute('src', contact.src);

    donne13.appendChild(imgeprofil);

    tr13.appendChild(donne13);

    var donne12 = document.createElement('td');
    donne12.id = "user-nom";
    donne12.innerText = "NOM: " +contact.nom;

    tr13.appendChild(donne12);

    var donne13 = document.createElement('td');
    donne13.id = "user-prenom";
    donne13.innerText = "Prenom :" +contact.prenom;

    tr13.appendChild(donne13);

    tableViews.appendChild(tr13);

    var tr23 = document.createElement('tr');
    var donne23 = document.createElement('td');
    donne23.id = "user-groupe";
    donne23.setAttribute("colspan", "2");
    donne23.innerText = "GROUPE:" +contact.groupe;
    tr23.appendChild(donne23);

    tableViews.appendChild(tr23);

    var tr33 = document.createElement('tr');
    var donne33 = document.createElement('td');
    donne33.id = "user-groupe";
    donne33.setAttribute("colspan", "2");
    donne33.innerText = "BIOGRAPHIE:" +contact.bio;
    tr33.appendChild(donne33);

    tableViews.appendChild(tr33);

    divitems.appendChild(tableViews);
    divitems.appendChild(btndelete);

    ConteneurAvatar.appendChild(divitems); 
 
    return ConteneurAvatar;
}
const deleteElement=(event)=>{

    event.preventDefault();
    let cartContact=event.path[1];
    cartContact.remove()
    
}
function fresh(){

   prenom.value = "";
   nom.value = "";
   groupe.value = "";
   texbio.value = ""; 
}


function isEquivalent(newcontact, contactNext) {
    
    if(newcontact.groupe === contactNext.groupe && 
        newcontact.nom === contactNext.nom && 
        newcontact.prenom === contactNext.prenom  ){
            return true
        }
}

function isExiste(arrayContact){

    if(arrayContact.length >= 2){
        for (let j = 1; j< arrayContact.length; j++) {
            if(isEquivalent(arrayContact[0],arrayContact[j])){
                return true;
            }else return false
       }
    }
}

function showContact() {
   let  newContact = Tocheck(prenom, nom, groupe, texbio);   

    if(newContact != undefined){ 
       
        infoContact={...newContact};
        infoContact.src=  imgView.src ;
        contacts.push(infoContact);
        contacts.reverse();
            
        fresh();

        if(!isExiste(contacts)){
            let btndelete=creatModel(infoContact).lastChild.lastChild
             btndelete.onclick=deleteElement;
        } 
    }
}

formulaire1.addEventListener("submit", (event) => {
    
    event.preventDefault();
    event.stopPropagation();
    showContact();
   
})