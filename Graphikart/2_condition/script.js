var marc = {
    nom: "Marc",
    age : 22, 
    moyenne:15
}

if (marc.age >= 18 && marc.age <= 25 ) {
    console.log("Tu peux avoir la reduction jeune !")
} else {
    console.log("Désoler, tu ne peux pas avoir la reduction !")
}

/* Switch case*/

switch ( marc.age ) {
    case 18:
        console.log(" Bravo tu as 18 ans ! ")
        break
    case 25:
        console.log(" Bravo tu as un quart de siècle ")
        break
    case 50:
        console.log(" Bravo tu as un demi siècle ! ")
        break
    default:
        console.log(" Bon anniversaire")
}

/* Terner */

console.log(marc.gae >= 18 ? " Tu es majeur ! " : " Tu es mineur ! ");