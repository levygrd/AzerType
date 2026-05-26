lancerJeu()
initAddEventListenerPopup()

//getElementById
let InputEcriture = document.getElementById("inputEcriture");
console.log(InputEcriture)
let BoutonValidation = document.getElementById("btnValiderMot");
console.log(BoutonValidation)

//querySelector
let ZoneProposition = document.querySelector(".zoneProposition");
console.log(ZoneProposition)
let ZoneScore = document.querySelector(".zoneScore span");
console.log(ZoneScore)

//querySelectorAll
let boutonRadio = document.querySelectorAll("input[type=radio]");
console.log(boutonRadio)

//recuperation des valeurs des boutons radio
for (let i = 0; i < boutonRadio.length; i++) {
    console.log(boutonRadio[i].checked) 
}

//recuperation du bouton envoyer du formulaire
let boutonEnvoyer = document.getElementById("btnEnvoyerMail");
console.log(boutonEnvoyer)