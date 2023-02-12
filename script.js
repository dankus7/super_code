let poledliavvoda = document.querySelector('input');
let tekst = poledliavvoda.value;
let knoppka = document.querySelector('.obnovit');
let knoppka_reseta = document.querySelector('.resetnut')

knoppka.onclick = function () {
    let tekst = poledliavvoda.value;
    console.log('- Текст обновляется -', tekst);
}

knoppka_reseta.onclick = function () {
    poledliavvoda.value = null
    console.log('- Текст ресетается -', poledliavvoda.value);
}
