/*function afficherResultat(score, nombreMots) {
    let SpanScore = document.querySelector(".zoneScore span")
    let AffichageScore = `${score} / ${nombreMots}`
    SpanScore.innerText = AffichageScore
    let message = 'Votre score est de ' + score + ' sur ' + nombreMots
    //return message
    
}


function lancerJeu() {
   let score = 0
   let nombreMots = 0  
   let i = 0 
   //Quand le bouton est declenché on lis la valeur de l'input et l'affiche
   let BoutonValidation = document.getElementById("btnValiderMot");
   let InputEcriture = document.getElementById("inputEcriture");
   BoutonValidation.addEventListener("click",() => {
    i++
    console.log(InputEcriture.value)
    console.log(listeMots[i])
   })                     
}

function afficherProposition(mot) {
    let ZoneProposition = document.querySelector(".zoneProposition");
    ZoneProposition.innerText = mot  // Remplace le texte dans la zoneProposition
    
}

function changerMots(){
let i = 0
afficherProposition(listeMots[i])  // Affiche le premier mot au démarrage

BoutonValidation.addEventListener("click", () => { 
    i++
    if (i < listeMots.length) {
        afficherProposition(listeMots[i])  // Affiche le mot suivant à chaque clic
    } else {
        baliseZoneProposition.innerText = "Jeu terminé !"
    }
})
}
*/
function afficherMesssageErreur(message){

    let SpanErreur = document.createElement("span")
    SpanErreur.id = "SpanErreur"
    SpanErreur.innerText = message
    SpanErreur.style.color = "white"
    document.querySelector(".popup").appendChild(SpanErreur)
}


function afficherProposition(mot) {
    let ZoneProposition = document.querySelector(".zoneProposition")
    ZoneProposition.innerText = mot
}


/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */



function afficherEmail(nom,email,score,listeProposition) {  
    let ModeJeu = listeProposition === listeMots ? "Mots" : "Phrases"               //NomFormulaire+" a Obtenue un score de : "+score+ " / " +nombreMots+" sur le mode "+ModeJeu+" !, Essaye de le battre !
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, ${nom} a Obtenue un score de ${score} sur le mode ${ModeJeu} du site AzerType ! Essaye de le battre !`
    location.href = mailto
}



function gererFormulaire(score,nombreMots,listeProposition) {
    try { 
    let boutonEnvoyer = document.getElementById("btnEnvoyerMail")
    boutonEnvoyer.addEventListener("click", () =>{
    let NomFormulaire = document.getElementById("nom").value
    let MailFormulaire = document.getElementById("email").value
    console.log(NomFormulaire,MailFormulaire)
    let sujet = "Voici le score de "+NomFormulaire+" sur le jeu AzerType !"
    //let Message = NomFormulaire+" a Obtenue un score de : "+score+ " / " +nombreMots+" sur le mode "+ModeJeu+" !, Essaye de le battre !"
    //console.log(sujet)
    //console.log(Message)
    let NomFormulaireElement = document.getElementById("nom")
    VerifierNom(NomFormulaireElement)    
    if (!nomCorrect) {
        afficherMesssageErreur("Nom invalide.")
        //document.querySelector(".popup form").insertAdjacentHTML("beforeend", "<p style='color:red'>Nom invalide.</p>")
       // console.log("Nom invalide.")
    }else{
        let ancienSpan = document.querySelector(".popup #SpanErreur")
        if (ancienSpan) ancienSpan.remove()
        let MailFormulaireElement = document.getElementById("email")
        VerifierEmail(MailFormulaireElement)

        if (emailCorrect) {
            let ancienSpan = document.querySelector(".popup #SpanErreur")
            if (ancienSpan) ancienSpan.remove()
            afficherEmail(NomFormulaire, MailFormulaire, score, listeProposition)
        } else {
            afficherMesssageErreur("Email invalide.")
            //document.querySelector(".popup form").insertAdjacentHTML("beforeend", "<p style='color:red'>Email invalide.</p>")
           // console.log("Email non valide.")
    }
    }
    
})}catch (error){
    console.error("erreur")
}

   
}



let nomFormulaire = document.getElementById("nom")
nomFormulaire.classList.add("error")
let nomCorrect = false
function VerifierNom(nomFormulaire) {
    try {
        let nomRegex = new RegExp("^[a-zA-ZÀ-ÿ -]+$")
        
        if (nomRegex.test(nomFormulaire.value)) {
            nomCorrect = true        
            console.log("OK")
            nomFormulaire.classList.remove("error")
        } else {
            nomCorrect = false     
            nomFormulaire.classList.add("error")
            console.log("KO")
        }
    } catch (error) {
        console.error("Erreur dans VerifierNom :", error)
        nomCorrect = false
        nomFormulaire.classList.add("error")
    }
}




let MailFormulaire = document.getElementById("email")
MailFormulaire.classList.add("error")
let emailCorrect = false
function VerifierEmail(MailFormulaire) {
    try {
        let emailRegex = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
        
        if (emailRegex.test(MailFormulaire.value)) {
            emailCorrect = true        
            console.log("OK")
            MailFormulaire.classList.remove("error")
        } else {
            emailCorrect = false     
            MailFormulaire.classList.add("error")
            console.log("KO")
        }
    } catch (error) {
        console.error("Erreur dans VerifierEmail :", error)
        emailCorrect = false
        MailFormulaire.classList.add("error")
    }
}




function afficherResultat(score, nombreMots) {
    let SpanScore = document.querySelector(".zoneScore span")
    SpanScore.innerText = score + " / " + nombreMots
}




function lancerJeu() {
    let score = 0
    let i = 0
    let listeProposition = listeMots
    let BoutonValidation = document.getElementById("btnValiderMot")
    let InputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listeProposition[i])  // Affiche le premier mot au démarrage

    BoutonValidation.addEventListener("click", () => {

        // 1. On compare ce que l'utilisateur a tapé avec le mot actuel
        if (InputEcriture.value === listeProposition[i]) {
            score++
        }

        InputEcriture.value = ""  //2. On vide le champ
        i++                       // 3. On passe au mot suivant apres la comparaison

        if (i < listeProposition.length) {
            afficherProposition(listeProposition[i])   // 4. Mot suivant
            afficherResultat(score, i)          // 5. Score mis à jour
        } else {
            afficherProposition("Jeu terminé !") // 6. Fin du jeu
            afficherResultat(score, listeProposition.length)
            BoutonValidation.disabled = true
        }
    })

let boutonRadio = document.querySelectorAll(".optionSource input")
for (let index = 0; index < boutonRadio.length; index++) {
    boutonRadio[index].addEventListener("change", (event) => {
        console.log(event.target.value)
        if (event.target.value === "1"){
            listeProposition = listeMots
        }else{
            listeProposition = listePhrase
        }
        afficherProposition(listeProposition[i])
    })
}
let ZonePartage = document.querySelector(".popup form")
ZonePartage.addEventListener("submit",(event) =>{
    event.preventDefault()
})
let nombreMots = listeProposition[i].length
let ModeJeu = mots
if (listeProposition[i] === listeMots){
    ModeJeu = mots
}else{
    ModeJeu = phrases
}
gererFormulaire(score, listeProposition.length, listeProposition)




}

