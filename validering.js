//Funktion (loop) för att validera telefonnummer
function giltigTelefon(telefon) {
  for (let i = 0; i < telefon.length; i++) {
    let char = telefon[i];

    if (!((char >= '0' && char <= '9') || char === '-')) {
      return false;
    }
  }
  return true;
}

//Funktion för att validera formuläret, kontrollerar namn, telefon och prioritet
function valideraFormular() {

   //Variabelnamn för de värden som valideras
  const namn = document.getElementById("namn").value.trim();
  const telefon = document.getElementById("telefon").value;
  const prioritet = document.getElementById("prioritet").value;

  document.getElementById("felNamn").textContent = "";
  document.getElementById("felTelefon").textContent = "";

  //Sätter validerad till true
  let validerad = true;

  //Kollar om användaren skrivit in namn
  if (namn === "") {
    document.getElementById("felNamn").textContent =
      "Skriv in ett namn";
    validerad = false;
  }

  //Kollar om användaren skrivit in telefonnummer
  if (telefon === "") {
    document.getElementById("felTelefon").textContent =
      "Skriv in ett telefonnummer";
    validerad = false;

   //Kollar om telefonnummret är tilltigt via funktionen giltigTelefon 
  } else if (!giltigTelefon(telefon)) {
    document.getElementById("felTelefon").textContent =
      "Telefonnummer måste vara ett nummer";
    validerad = false;
  }

  if (validerad) {

    //Variabelnamn för de värden som inte valideras
    const kategori = document.getElementById("kategori").value;
    const rubrik = document.getElementById("rubrik").value;
    const beskrivning = document.getElementById("beskrivning").value;

    //Kollar vilken radioknapp som är vald, om ingen retuneras en tom sträng
    const valdOrt = document.querySelector('input[name="ort"]:checked');

    //Sätter ort till det valda värdet, annars tom sträng
    const ort = valdOrt ? valdOrt.value : "";

    //Loggar värdena från formuläret
    console.log("Namn:", namn);
    console.log("Telefon:", telefon);
    console.log("Prioritet:", prioritet);
    console.log("Ort:", ort);
    console.log("Kategori:", kategori);
    console.log("Rubrik:", rubrik);
    console.log("Beskrivning:", beskrivning);
  }

  //Om validerad är true och prioritet är = 3, skickas formläret
  if (validerad && prioritet === "3"){
        return true;
  }

  //Om prioritet inte är = 3, skickas inte formläret
  return false;
}