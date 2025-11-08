//1.uzdevums
//Izveidojiet primitīvu HTML un JS aplikāciju, 
// kas lietotājam ļauj aprēķināt rīņķa līnijas garumu vai laukumu pēc lietotāja ievadītā riņķa rādiusa.
//!! Izmantojiet tikai devdocs.io !!
//devdocs.io nepieciešams iepējot (enable) sadaļu "Web APIs", jo ar Javascript sadaļu vien nepietiks.
//Atslēgas vārdi: document, addEventListener, value, getElementById, innerHTML

console.log("JS working")

const PI = 3.14;
const radius = document.getElementById("radius");
const button = document.getElementById("button");
let variableRLG = document.getElementById("RLG")
let veriableRLL = document.getElementById("RLL")

button.addEventListener("click", aprekini)


function aprekini() 
{
    radiusValue = radius.value
    variableRLG.innerText = 2 * PI * radiusValue
     console.log("RLG working")
     veriableRLL.innerText = PI * radiusValue * radiusValue
     console.log("RLL working")
};


