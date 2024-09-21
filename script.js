let boutonPierre = document.getElementById("pierre")
let boutonPapier = document.getElementById("papier")
let boutonCiseaux = document.getElementById("ciseaux")

let texteJoueur = document.getElementById("joueur")
let texteRobot = document.getElementById("robot")
let texteResultat = document.getElementById("resultat")

const choixShifumi = [boutonPierre, boutonPapier, boutonCiseaux]

for(let i = 0; i < choixShifumi.length; i++){

    choixShifumi[i].addEventListener('click', () => {

        let choixRobot = Math.floor(Math.random() * choixShifumi.length)

        if(choixShifumi[choixRobot] === choixShifumi[i]){

            texteJoueur.textContent = "Joueur : " + choixShifumi[i].innerText
            texteRobot.textContent = "Robot : " + choixShifumi[choixRobot].innerText
            texteResultat.textContent = "Resultat : Egalité !"

        } else if((choixShifumi[i] == boutonPapier && choixShifumi[choixRobot] == boutonPierre) ||
                    (choixShifumi[i] == boutonPierre && choixShifumi[choixRobot] == boutonCiseaux) ||
                    (choixShifumi[i] == boutonCiseaux && choixShifumi[choixRobot] == boutonPapier)) {

            texteJoueur.textContent = "Joueur : " + choixShifumi[i].innerText
            texteRobot.textContent = "Robot : " + choixShifumi[choixRobot].innerText
            texteResultat.textContent = "Resultat : Victoire !"

        } else {

            texteJoueur.textContent = "Joueur : " + choixShifumi[i].innerText
            texteRobot.textContent = "Robot : " + choixShifumi[choixRobot].innerText
            texteResultat.textContent = "Resultat : Défaite !"

        }
        
    })

}
