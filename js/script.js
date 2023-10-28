// creo elemento array immagini 

const images = [ "./img/01.jpg", "./img/02.jpg", "./img/03.jpg" , "./img/04.jpg"];
console.log(images);
const itemsElem = document.querySelector (".items")

let imageString =""
for (let i = 0; i < images.length; i++) {
     const image = images [i];
    imageString += 
    `<div class="item">
        <img src=${images [i]} alt="">
    </div>`
    console.log(imageString);
}

itemsElem.innerHTML += imageString;
let currentIndex = 0;
const slideElems = document.querySelectorAll(".item")
slideElems[currentIndex].classList.add("active");

// pulsante avanti

document.querySelector(".next").addEventListener ("click", function () {
    slideElems[currentIndex].classList.remove("active");

    if (currentIndex < slideElems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }
    slideElems[currentIndex].classList.add("active");
});   

// pulsante indietro

document.querySelector(".prev").addEventListener("click", function() {
    slideElems[currentIndex].classList.remove("active");
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideElems.length - 1;
    }
    slideElems[currentIndex].classList.add("active");
})