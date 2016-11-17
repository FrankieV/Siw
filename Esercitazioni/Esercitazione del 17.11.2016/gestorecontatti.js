function Contatto(firstname, lastname, phone, email)
{
	this.firstname = firstname;
	this.lastname = lastname;
	this.phone = phone;
	this.email = email;
}

var contatti = []; // è l'equivalente di this.contatti = new Array()?

function aggiungiContatto(contatto){
	contatti.push(contatto);
	aggiungiInHtml(contatto);
}

function aggiungiInHtml(contatto)
{
	var tBody = document.getElementById("tBody");
	var ultimaRiga = document.getElementById("ultimaRiga");
	
	var tr = document.createElement("tr");
	var tdNome = document.createElement("td");
	tdNome.textContent = contatto.firstname;
	var tdCognome = document.createElement("td");
	tdCognome.textContent = contatto.lastname;
	var tdPhone = document.createElement("td");
	tdPhone.textContent = contatto.phone;
	var tdEmail = document.createElement("td");
	tdEmail.textContent = contatto.email;
	
	tr.appendChild(tdNome);
	tr.appendChild(tdCognome);
	tr.appendChild(tdPhone);
	tr.appendChild(tdEmail);

	tBody.insertBefore(tr,ultimaRiga);
}


function creaContatto()
{
	var nome = document.getElementById("nome");
	var cognome = document.getElementById("cognome");
	var telefono = document.getElementById("phone");
	var email = document.getElementById("email");
	return new Contatto(nome.value, cognome.value, telefono.value, email.value);
}



