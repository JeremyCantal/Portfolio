function onDisparition(){
    $("#text_center_modif").hide();
    console.log("'text_center_modif' a été masqué");
}

function onDisparitionTete(){
    $("#celImgProfile").hide();
    $("#text_center_modif").hide();
    console.log("Il a enlevé ta tête avec !!!");
    $("#comPhoto").replaceWith("<td><button style='color:red; font-weight: bold;' onclick='onReapparitionTete()' class='btnAjoute'>REMET MA TETE TOI!</button></td>");
}

function onReapparition(){
    $("#text_center_modif").show();
    console.log($('#celImgProfile').val());

}

function onReapparitionTete(){
    $("#celImgProfile").show();
    setTimeout("alert('Ok, ok c est cool, merci bro !');", 200);
}

$("#jouerPartie").hide();

function onJouer(){
    $("#jouerPartie").show();
    $("#boutonJouer").hide();
}

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let essaiCount = document.querySelector('.essaiCount');
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');
    
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');
    
    let guessCount = 1;
    let resetButton;

function getProposition(){
    let userGuess = Number(guessField.value);

    if (userGuess === randomNumber) {
        essaiCount.textContent = guessCount;
        guesses.textContent = userGuess;
        lowOrHi.textContent = 'Bravo, tu as trouvé le nombre mystère !';
        lastResult.innerHTML = '<img src="assets/images/cocheVerte.jpg">';
        
        setGameOver();
    } 
    else if (guessCount === 10) {
        essaiCount.textContent = guessCount;
        guesses.textContent = userGuess;
        lowOrHi.textContent = 'Et bien... tu as perdu ! HAHA !';
        lastResult.innerHTML = '<img src="assets/images/cocheRouge.jpg">';
        setGameOver();
    } 
    else {
        essaiCount.textContent = guessCount;
        guesses.textContent = userGuess;
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
            lastResult.innerHTML = '<img src="assets/images/cocheRouge.jpg">';
            
        } 
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
            lastResult.innerHTML = '<img src="assets/images/cocheRouge.jpg">';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', getProposition);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
  
    let resetTab = document.querySelectorAll('.resultTab td');
    for (let i = 0 ; i < resetTab.length ; i++) {
        resetTab[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
   
    // for(var nbTentative = 0; nbTentative < 7; nbTentative++){
    //     console.log("nbTentative : " + nbTentative);
    //     var choix = document.getElementById("reponsesFakir");
    //     for(var i = 0; i < choix.length; i++){
    //         console.log("choix : " + choix.elements[i].value);
    //         if(nbTentative < 6){
    //             if(choix.elements[i].value <= nbrMyst && choix.elements[i].value != "Valider"){
    //                 console.log("Trop bas...");
    //                 document.getElementById("result").innerHTML = "Trop bas...";
    //             }
    //             else if(choix.elements[i].value >= nbrMyst && choix.elements[i].value != "Valider"){
    //                 console.log("Trop haut...");
    //                 document.getElementById("result").innerHTML = "Trop haut...";
    //             }
    //             else{
    //                 gagne = true;
    //                 console.log("Bien joué !");
    //                 document.getElementById("result").innerHTML = "Hey c'était bien " + nbrMyst + " ;-)";
    //             }
    //         }
    //         else{
    //             if(choix.elements[i].value != nbrMyst && choix.elements[i].value != "Valider"){
    //                 console.log("C'est raté !");
    //                 alert("C'est raté ! Le nombre mystère est : " + nbrMyst + ". Vous avez essayé : " + choix.elements[i].value);
    //             }
    //             else{
    //                 gagne = true;
    //                 console.log("Bien joué ! Au dernier coup, c'était chaud !")
    //                 alert("Bien joué ! Au dernier coup, c'était chaud !");
    //             }
    //         }
    //     }
    // }
    
    // $("#jouerPartie").hide();
//}

// function onTentavive(x){
//     this.x = x;
//     console.log(x);
    // $('<tr><td>' + x + '</td><td>Trop haut !</td><td><img src="assets/images/cocheRouge.jpg"></td></tr>')
// }










