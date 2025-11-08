//Izveidojiet primitīvu HTML un JS kalkulātora aplikāciju, kas lietotājam ļauj sareizināt un izdalīt divus skaitļus.
//Nepieciešama izkrītošā izvēle (select), kas ļauj izdarīt vienu vai otru.

console.log("JS working")

const skaitlis1 = document.getElementById("1skaitlis");
const skaitlis2 = document.getElementById("2skaitlis");
const reizinat = document.getElementById("reizinat");
const dalit = document.getElementById("dalit");
let rezultats = document.getElementById("rezultats");

reizinat.addEventListener("click", sareizinat);
dalit.addEventListener("click", izdalit)

function sareizinat () 
{
    let skaitlis1USE = skaitlis1.value
    let skaitlis2USE = skaitlis2.value
    rezultats.innerText = skaitlis1USE * skaitlis2USE
};

function izdalit () 
{
    let skaitlis1USE = skaitlis1.value
    let skaitlis2USE = skaitlis2.value
    rezultats.innerText = skaitlis1USE / skaitlis2USE
};


