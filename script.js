let boutons = document.querySelectorAll("button")
let numb =document.querySelectorAll(".numb");
let lettres = document.querySelectorAll(".lettre");
let affichage = document.getElementById("text_affiche");
let majuscule = false
let verif = (signe) => {
    return /^[0-9+\-*/]+$/.test(signe);
};


numb.forEach(numero => {
    numero.addEventListener("click", () => {
        let result = numero.innerHTML
        if(result === "="){
            try {
                if (verif(affichage.value)) {
                    affichage.value = eval(affichage.value); // Attention à eval
                } else {
                    affichage.value = "Erreur";
                }            } catch {
                affichage.value = "Erreur"
            }
        } 
        if(result !== "="){
            affichage.value += result
        }
    })
})

lettres.forEach(lettre => {
    lettre.addEventListener("click", () => {
        let text = lettre.innerHTML
        text = majuscule ? text.toUpperCase() : text.toLowerCase();
        affichage.value += text
    })
})

document.querySelector(".fleche-eff").addEventListener("click", () => {
    affichage.value = affichage.value.slice(0, -1)
});

document.querySelector("#space").addEventListener("click", () => {
    affichage.value += " ";
});


document.querySelector(".fleche-sup").addEventListener("click", () => {
    affichage.value += "\n";
});



document.querySelector("#fleche-tab").addEventListener("click", () => {
    majuscule = !majuscule
    document.querySelector("#fleche-tab").classList.toggle("active")
    
    lettres.forEach((lettre) => {
        lettre.innerHTML = majuscule
            ? lettre.innerHTML.toUpperCase()
            : lettre.innerHTML.toLowerCase();
    });
})