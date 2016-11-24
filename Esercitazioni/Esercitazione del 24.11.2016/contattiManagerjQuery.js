function Contatto(nome, cognome, telefono, email) {
    this.nome = nome;
    this.cognome = cognome;
    this.telefono = telefono;
    this.email = email;
}

var contatti = [];

function init()
{
	var butAggiungiContatto = $("#addButton");
	butAggiungiContatto.on('click', aggiungiContatto);
}


function aggiungiContatto(){
	var nuovoContatto = creaContatto();
	contatti.push(nuovoContatto);
	var tBody = $("#tBody");
	var lastRow = $("#lastRow");
	
	var tr = $("<tr></tr>");
	
	var tdNome = $("<td></td>");
	tdNome.text = nuovoContatto.nome;
	tr.append(tdNome);
	
	var tdCognome = $("<td></td>");
	tdCognome.text = nuovoContatto.cognome;
	tr.append(tdCognome);
	
	var tdTelefono = $("<td></td>");
	tdTelefono.text = nuovoContatto.telefono;
	tr.append(tdTelefono);
	
	var tdEmail = $("<td></td>");
	tdEmail.text = nuovoContatto.email;
	tr.append(tdEmail);
	
	var tdAction = $("<td></td>");
	
	var removeButton = $("<button></button>");
	removeButton.text = "Rimuovi contatto";
	removeButton.on('click', function(){
		tr.remove();
		contatti.remove(nuovoContatto);
	});
	tdAction.append(removeButton);
	
	var editButton = $("<button></button>");
	editButton.text = "Modifica contatto";
	editButton.on('click', function(){
		var nome = prompt("Inserisci il nuovo nome");
		var cognome = prompt("Inserisci il nuovo cognome");
		var telefono = prompt("Inserisci il nuovo telefono");
		var email = prompt("Inserisci la nuova email");
		nuovoContatto.nome = nome;
		nuovoContatto.cognome = cognome;
		nuovoContatto.telefono = telefono;
		nuovoContatto.email = email;
		
		tdNome.text = nome;
		tdCognome.textt = cognome;
		tdTelefono.text= telefono;
		tdEmail.text = email;
	});

	tdAction.append(editButton);
	
	tr.append(tdAction);
	
	lastRow.before(tr);
}

function creaContatto(){
	var inputs = $("#lastRow").find("input");
	var nome = inputs.eq(0).val();
	var cognome = inputs.eq(1).val();
	var telefono = inputs.eq(2).val();
	var email = inputs.eq(3).val();
	var contatto = new Contatto(nome, cognome, telefono, email);
	return contatto;
}

//window.addEventListener('load',init);
$(document).ready(init);