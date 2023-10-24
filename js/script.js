// creo elemento array immagini 

const images = [ "./img/01.jpg", "./img/02.jpg", "./img/03.jpg" , "./img/04.jpg"];
console.log(images);

slideElem = document.querySelector(".item")

let imageString = "";
for (let i = 0; i < images.length; i++) {
    const curImages = images[i];
    
    imageString = `<img class="slide-image" src="${curImages}" alt=""`;
}
slideElem.innerHTML = imageString
    console.log(slideElem);

const slideElems = document.querySelectorAll(".slide-image");
    console.log(slideElems);

    let currentSlideIndex = 0
    slideElems[currentSlideIndex].classList.add("current")

    document.querySelector(".prev").addEventListener("click", function (event) {
        event.preventDefault();
        if (currentSlideIndex < slideElems.length -1){
            slideElems [currentSlideIndex].classList.remove ("current");
            currentSlideIndex++;
            slideElems[currentSlideIndex].classList.add ("current")
        }
        
    })

    document.querySelector("next")addEventListener("click", function (event)
        event.preventDefault();{
            
        }
    )