$(document).ready(function () {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.Stampare a schermo attraverso il for in tutte le proprietà.
  var studente = {
    'nome' : 'Mauro',
    'cognome' : 'Spinosi',
    'eta' : 26,
  };

  for(var key in studente){
    console.log(key + ":" + " " + studente[key]);
  }

  var html = template(studente);
  $(".student").append(html);
});

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [
  {
    'nome' : 'Marco',
    'cognome' : 'Laprea',
    'eta' : 87,
  },
  {
    'nome' : 'Giuseppe',
    'cognome' : 'Esposito',
    'eta' : 32,
  },
  {
    'nome' : 'Carolina',
    'cognome' : 'Sicignano',
    'eta' : 21,
  },
];


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoOggetto = {
'nome' : prompt("Inserisci il Nome"),
'cognome' : prompt("Inserisci il Cognome"),
'eta' : parseInt(prompt("Inserisci l' età")),
}
studenti.push(nuovoOggetto);

for (var i = 0; i < studenti.length; i++){
  for(var j in studenti[i]){
    console.log(j + ":" + " " + studenti[i][j]);
  }
}
