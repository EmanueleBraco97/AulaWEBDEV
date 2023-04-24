//CREO LE DUE COSTANTI CON I CAMPI DECISI DA NOI//
const inputName = "pinco";
const inputPassword = "pallino";

//CREO DELLE VARIABILI ASSOCIATI AI TAG HTML TRAMITE ID//
let form = document.getElementById("form");
let nome = document.getElementById("name");
let password = document.getElementById("password");
let button = document.getElementById("btn");

button.addEventListener("click", handleControl); //associato al button l'evento click quando si verifica la funzione "handleControl"

function handleControl() {
  if (nome.value === inputName && password.value === inputPassword) {
    window.location.replace("loginCorretto.html"); //reindirizzo sulla pagina nuova dopo login confermato//
    console.log('form inviato');
  } else {
    console.log('form errato');
    let error = document.createElement("p"); //creo un elemento HTML(tag p) per creare messaggio d'errore
    error.textContent = "Credenziali errate, riprova";
    error.style.color = "red";
    form.appendChild(error); //error(che è tag p, creato sopra) lo vado ad "appendere" nel tag form
    form.reset(); //resetto form//

    //funzione per rimuovere scritta d'errore dopo 5 secondi//
    setTimeout(() => {
        error.remove();
    }, 5000)
  }
}
