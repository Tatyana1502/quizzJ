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
  function calculateScore() {
    reponse.addEventListener("click",(Event) => {
      console.log(Event.target.innerText);
      if (Event.target.innerText === questions[index].correctAnswerIndex) {
        index++;
        console.log("score ", correctAnswerIndex)
      }
    })
    // let Score = 0;
    // let repons = document.getElementsByTagName("li");
    //   for (let ind = 0; ind <repons.length; ind++){
    //      let repon = repons[ind];
    //     let options = repon.getElementsByTagName("correctAnswerIndex");
    //     for (let j = 0; j < options.length; j++) {
    //     let option = options[j];
    //      if (option.checked && option.value == questions[index].correctAnswerIndex.value) {
    //         Score++;
    //        break;
    //      }
    //    }

    //    }
     }
    console.log("questions: ", questions);
    console.log("question: ", questions[0]);    
    console.log("answers: ", questions[0].answers[0]);
    console.log("answers: ", questions[0].answers[1]);
    console.log("answers: ", questions[0].answers[2]);
    console.log("answers: ", questions[0].answers[3]);

   let index = 0;
    for (index = 0; index < questions.length; index++){
      // document.querySelector("#question").innerHTML = questions[0].question;
      // questions.innerText = questions[index].question;
         for (let i = 0; i < questions[index].answers.length; i++) {    
          document.querySelector("#question").innerHTML = questions[index].question;
              let reponse = document.getElementById("answers");
             let answer = document.createElement("li");
              answer.classList.add("answer");
             answer.innerText = questions[index].answers[i];
              console.log("answers: ", answer);
              reponse.appendChild(answer);
              // questions.appendChild(answer);
              
              // index++;
          
         
calculateScore();
// index++;
         }
        //  index++;
        }
   
        // let resultmessage = "Votre result " + Score;
  // document.getElementById(".result-container").innerHTML = resultmessage;
      

      
   
   })   
   
   

