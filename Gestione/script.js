let people = [];

function aggiungiPersona(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let tel = document.getElementById("tel").value;
    let country = document.getElementById("country").value;
    let province = document.getElementById("province").value;
  


    if (name === "" || surname === "" || email === "" || birthdate === "" || tel === "" || country === "" || province === ""){
        alert("Tutti i campi devono essere raccolti. (cit greg)");
        return;
    }     

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Inserisci un'email valida!");
        return;
    }

    let person = {
        name: name,
        surname: surname,
        email:email,
        birthdate:birthdate,
        tel:tel,
        country:country,
        province:province

    }
    
    people.push(person); //aggiungere la persona nell'array people

    aggiornaTabella(person);

    document.getElementById("name").value = ""; //SI USA PER RIPULIRE I CAMPI
    document.getElementById("surname").value = "";
    document.getElementById("email").value = ""; 
    document.getElementById("birthdate").value = "";  
    document.getElementById("tel").value = "";
    document.getElementById("country").value = "";
    document.getElementById("province").value = "";

}
 function aggiornaTabella(){
    let tabella = document.getElementById("dati");

    tabella.innerHTML=""; //tabella per ora vuota

    for (let i = 0; i < people.length; i++) { //for per creare le righe nella tabella
        let person = people[i];
        let personRow = document.createElement("tr");

    personRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td>${person.email}</td>
    <td>${person.birthdate}</td>
    <td>${person.tel}</td>
    <td>${person.country}</td>
    <td>${person.province}</td>`;    

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Rimuovi";

    deleteButton.onclick = function() {
        people.splice(i, 1); // usa i come indice per rimuovere la persona corrente
        aggiornaTabella(); // aggiorna la tabella aver rimosso la persona
    };    

    let action = document.createElement("td");
    action.appendChild(deleteButton);
    personRow.appendChild(action);
    tabella.appendChild(personRow);
 }

 }
 function inviaModulo(){
    
    if(people.length === 0) { //uguaglianza stretta, sia il valore sia il tipo
        alert("Deve essere presente almeno una persona!") //controllo 
        return false;
    }   return true;
}