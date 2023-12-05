/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée) 
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendant plus d'une minute 
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes après avoir mangé
*/

/* 
Phase 1 la naissance de mon tamastudi
1 demander le nom de mon personnage
2 fait eclore mon tama
3 affiche mes vitals à 5/5
4 affiche le nom de mon tama dans les vitals
5 mettre les scores des vitals a 5

*/
const startTama = () => {
    /*Première fonction Demander le prenom*/
    const myTama = prompt('Quel est le nom de ton TamaStudi ?')

    /* faire eclore mon oeuf*/
    const character = document.querySelector('.js-character')
    character.textContent = '🐣'

    /*3 affiche mes vitals à 5*/
    const vitals = document.querySelector('.js-vitals')
    console.log(vitals)
    vitals.classList.remove('hidden')

    /* Affiche le nom de mon tama */

    const nameDisplay = document.querySelector('js-tamaname')

    /* Mettre les scores des vitals à 5 */
}

//Phase 0 activer le tamastudi cliquer sur le bouton du milieu
//quand on arrive a 5 clics on fait naitre le tama
