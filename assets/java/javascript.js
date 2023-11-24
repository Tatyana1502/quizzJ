









/*************************/
/*       Questions       */
/*************************/

const questions = [
    {
      // Texte de la question
      question:
        "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
      // Réponses possibles
      answers: [
        "Darth Vader",
        "Anakin Skywalker",
        "Les deux réponse",
        "Aucune réponse",
      ],
      // Index de la réponse correcte
      correctAnswerIndex: 2,
    },
    {
      question:
        'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
      answers: [
        "1967",
        "1974", 
        "1962", 
        "1980"],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
      answers: [
        "Zelda", 
        "Ganon", 
        "Tom", 
        "Link"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
      answers: [
        "Apollo 9", 
        "Mercury 1", 
        "Apollo 13", 
        "Gemini 2"],
      correctAnswerIndex: 2,
    },
  ];
  
  /********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/
  
  /*************************/
  /* Contenu du DOM chargé */
  /*************************/
  document.addEventListener("DOMContentLoaded", () => {
    
  // démarrage du quizz
    
  });

// for (questions == 0, questions >= 3, index++) {
    
    console.log("questions: ", questions);
    document.getElementById("#question");
    let Variable = document.getElementById("question").value;
    document.querySelector("#question").innerText = questions[0].value;
    // document.innerText = Variable ;
//     let radioElement;
// radioElement = document.getElementById('radioElement');
document.querySelector("button").addEventListener("click", () => {

document.querySelectorAll("input[type='radio']").forEach(async radio => {
     radio.addEventListener("change", async () => {
    //  document.querySelector("radio1").innerHTML = "questions.answers" + questions.answers;
    //  if (questions.question == 0) {
        if (correctAnswerIndex.value == true){
            console.log("correct: ", answers);
            // console.log(score
            
        }
        //  if (radio.value == "nom") {
        //      console.log("NOM");
        //     //  await listPokemons ();
        //  } 
         else {
             console.log("incorrect: ", answers);
            //  await listElements ();
         }  
        // }
    })        
 });
})
// function correct {
//     for (questions.question == 0) {
//         let correctAnswerIndex = 2;
//     }
// }
//     if (questions == 0) {
//         if (answers == 2){
//             console.log("correct: ", answers);
//             // console.log(score
            
//         }
// }
// }