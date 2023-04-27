const questions = document.querySelectorAll(".question"); //prendo tutti elementi html con classe "question" e li salvo nella variabile "questions"//
const answerContainer = document.querySelector(".answer-container"); //prendo l'elemento html con class "answer-container" e salvo nella variabile//

//creo l'array di oggetti data, con 1 proprietà: "answer" con l'indice dell'array che corrisponde all'indice dell'elemento HTML della domanda.//
const data = [
  {
    answer:
      "-JavaScript è un linguaggio di programmazione, non tipizzato, ovvero non dichiariamo il tipo di variabile; -TypeScript invece si basa su JavaScript, ma è fortemente tipizzato, quindi noi riusciamo a dare tipi alle variabili(ad esempio) in javascript grazie a questo superset(TypeScript); Esempio Javascript: let nome = 'emanuele'; Esempio Typescript: let nome : string = 'emanuele'. Nell'esempio di typescript, successivamente nel codice non possiamo aggiornare let nome con un valore di altro tipo che non sia string.",
  },

  {
    answer:
      "-CSS è un linguaggio di Stile, col CSS possiamo dire come elementi HTML devono essere visualizzati, se in riga o in colonna, possiamo dare animazioni, colori, bordi, dimensioni(width e heigth). Agli elementi HTML possiamo dare delle classi che poi richiamiamo nel nostro file esterno(link)css(classi = .my-class), oppure dare degli id che a dispetto delle classi sono univoci(id= #myId).Con Css possiamo rendere le pagine anche responsive, ovvero adattare la pagina per smartphone o tablet grazie alle mediaQuery",
  },

  {
    answer:
      "Javascript è un linguaggio di programmazione(scripting) orientato agli eventi, utilizzato soprattutto insieme html e css per rendere pagine dinamiche. Possiamo dichiarare variabili con let e var(si differenziano per lo scope, un esempio è che let puo' essere aggiornata ma non ridichiarata), poi ci sono le const, ovvero costanti che non si possono aggiornare. Possiamo collegarlo all'HTML tramite tag '<script src='main.js></script>'. Possiamo visualizzare output in console tramite 'Console.log()', C'è il concetto delle promise(ovvero un Oggetto) utilizzate per quanto riguarda la programmazione Asincrona, possiamo dichiarare oggetti che hanno proprietà: valore e inserire dentro dei metodi, possiamo accedere ad una proprietà di un oggetto con dicitura: 'oggetto.proprietà' esistono le funzioni e le funzioni possono essere anche di callback, ovvero possono essere passate come parametri dentro un'altra funzione. Si lavora molto con gli array che sono liste e ci sono vari metodi degli array con cui lavorare come map, filter, reduce, push e tanti altri. Ci sono gli operatori di confronto come '==, ===, <, >', operatori logici '&&, ||, !', abbiamo possibilità di concatenare stringhe(+), per avere la lunghezza di una stringa o array possiamo utilizzare il .length. Ci sono Innumerevoli cose da dire di JavaScript che non basterebbe questo codice",
  },

  {
    answer:
      "Una condizione a livello di codice possiamo scriverla: if(condizione == true) {allora fai qualcosa}, nelle parentesi dell'if noi inseriamo una condizione, che se è vera allora verrà svolto un qualcosa, altrimenti(ELSE) farà altro. N.B. alternativa a IF/ELSE in javascript c'è lo SWITCH",
  },

  {
    answer:
      "Un ciclo possiamo pensare ad un Ciclo For, ovvero un costrutto dove possiamo iterare ad esempio su un array un determinato numero di volte, ovvero esegue un blocco di codice fino a quando una certa condizione non viene soddisfatta: for(let i = 0; i < array.length; i++){}. Ci sono altri cicli come foreach, for of, Do While, While.",
  },

  {
    answer:
      "Teoricamente per polimorfismo possiamo intendere un qualcosa che ha più forme, in JavaScript possiamo pensare agli oggetti, anche se non vige tanto il concetto di classi ed ereditarietà, mi viene da pensare agli oggetti siccome li possiamo utilizzare ovunque",
  },

  {
    answer:
      "HTML(Hyper Text Markup Language) è un linguaggio di markup, ovvero abbiamo la possibilità di creare una struttura statica di una pagina web, non esegue operazioni e non manipola dati, si occupa 'solo' di creare una struttura di una pagina Web.",
  },
];

//utilizzo forEeach per iterare e aggiungere 2 eventi a ogni elemento della lista di domande//
questions.forEach((question) => {
  //nel momento in cui il mouse passa sopra la domanda, si attiverà questo evento e con il codice sottostante mostrerà la risposta//
  question.addEventListener("mouseenter", () => {
    //dataset è una proprietà di sola lettura//
    const index = question.dataset.index;
    console.log(question.dataset)
    const answer = document.createElement("div");
    answer.classList.add("answer");
    //assegno testo della risposta corrispondente della risposta alla domanda selezionata//
    answer.textContent = data[index].answer;
    answerContainer.innerHTML = "";
    answerContainer.appendChild(answer);
    answerContainer.style.display = "block";
  });

  //nel momento in cui il mouse viene tolto da sopra alla domanda allora il codice sottostante toglierà la risposta da schermo//
  question.addEventListener("mouseleave", () => {
    answerContainer.innerHTML = "";
    answerContainer.style.display = "none";
  });
});
