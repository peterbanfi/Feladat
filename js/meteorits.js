function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

var jsonFile;

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var data = xhttp.responseText;
    var datas = JSON.parse(data);

    jsonFile = datas;
    console.log(jsonFile);
    // Innen, ide dolgozz... Itt hívd meg a függvényeid stb. A json file tartalma innen érhető csak
    // Live servert használd mindig
    feladatEgy();
    feladatNegy();
    feladatOt();




}
getData('/js/meteorits.json', successAjax);

function feladatEgy() {
    //var found = [];
    /*     for (var i = 0; i < jsonFile.length; i++) {
            if (jsonFile[i] == "id") {
                found.push(jsonFile[i]);
            }
        } */
    console.log();
    createTable(jsonFile);
}

function createTable(adat) {
    var table = '';
    for (var i = 0; i < adat.length; i++) {
        table += '<tr>';
        for (var j in adat[i]) {
            table += `<td>${adat[i][j]}</td>`;
        }
        table += '</tr>';
    }
    document.querySelector('#tablazat').innerHTML = table;
}

function feladatNegy() {
    var nevSzerint = [];
    for (var i in jsonFile) {
        nevSzerint.push(jsonFile[i].name);
    }
    nevSzerint.sort();
    console.log(nevSzerint);
}

function sorrend() {
    for (var i in jsonContent) {
        jsonContent[i].mass.sort(function (a, b) {
            return a - b
        })
    }
}

function feladatOt() {
    var min = 0;
    var max = 0;
    var sum = 0;
    var avg = 0;
    var nN = 0;
    var count = 0;
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].mass != undefined) {
            sum += Math.round(jsonFile[i].mass);
            if (jsonFile[i].mass > max) {
                max = jsonFile[i];
            }
            if (jsonFile[i].mass < min) {
                min = jsonFile[i];
            }
            if (jsonFile[i].year = 1990) {
                nN = nN + 1;
            }
            if (jsonFile[i].mass > 10000) {
                count = count + 1;
            }
        } else {}
        avg = sum / jsonFile.length;
    }
    document.querySelector('#test').innerHTML = `A meteoritok össz súlya: ${sum} Kg.`;
    document.querySelector('#test2').innerHTML = `A meteoritok átlagsúlya: ${avg} Kg.`;
    document.querySelector('#test3').innerHTML = `A legnehezebb meteorit: ${max} Kg.`;
    document.querySelector('#test4').innerHTML = `A legkönyebb meteorit: ${min} Kg.`;
    document.querySelector('#test5').innerHTML = `10 000 kg-nál nehezebb meteoritok száma: ${count} db.`;
    document.querySelector('#test6').innerHTML = `Az 1990-ben lezuhant meteoritok száma: ${nN} db.`;
}






/* 
    A kapott JSON file a Föld-be csapódott meteoritok adatait tartalmazza.

    FELADATOK:
    1. Írasd ki egy táblázatba a következő adatait a meteoritoknak:
        id
        mass
        name
        nametype
        recclass
        reclat
        reclong
        year

     Pozitív, ha ezeket az elemeket nem az innerHTML segítségével hozod létre. 

    2. A táblázatban formázd a tömeget 2 tizedes jegy pontosan. Ha kell kerekíts a legközelebbi egészre.
       A matamatikai kerekítés szabályait használd. Ha valahol egész érték van, ott is legyen a 00 kiiratva
       az egész érték után .
       Formázd a dátumot az alábbi formátumba: 1990. 01. 02. 
    
    3. A táblázat fejlécére kattintva növekvő sorrendbe lehessen rendezni a táblázat adatait az alábbi
       meteorit tulajdonságok szerint: id, mass, name, és reclass.
       Az id és a mass szerinti rendezés számok alapján rendezzen.

    4.  Valósítsd meg a rendezést úgy, hogy nem csak növekvő, hanem csökkenő sorrendbe is lehessen az adatokat rendezni.
        Ha az adatok még nincsenek rendezve, akkor az adott fejlév/tulajdonság alapján növekvő sorrendbe rendezze az adatokat kattintásra.
        Amennyiben még egyszer ugyanarra a fejlécre kattintanak, akkor a sorrend legyen csökkenő. És így tovább....
        Amennyiben egy új fejlécre kattintanak, először mindig növekvő sorrend szerint legyenek az  adatok rendezve.

    5. A táblázat alá az alábbi adatokat ki kell iratni/számolni:

        Az összes meteorit összsúlya
        A legkönyebb meteorit súlya
        A legnehezebb meteorit súlya
        A meteoritok súlyának átlaga
        Hány darab meteorit csapódott be 1990-ben
        Hány darab meteorit súlya legalább 10000

        Ezeket az elemeket ne az innerHTML segítségével hozd létre. Használd az ismert node metódusokat. KÖTELEZŐEN!

    6. Legyen szép a táblázat és az adatok. HAsználj CSS-t a formázáshoz.

    7. Töltsd fel az elkészült fileokat egy github repoba, és küld el a repo elérhetőségét.

    8. Szusszanj egyet.

*/