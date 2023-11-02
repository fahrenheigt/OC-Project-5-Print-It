const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0; 
const numberOfSlide = slides.length;

createCaroussel(position);
createDots();

const listPoints = document.querySelectorAll(".dot");	
const img = document.querySelector(".banner-img");
const p = document.querySelector(".banner-txt");

updateDot();


const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');


left.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        createCaroussel(position);
});

right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } 
	else {
            position++;
    }
    createCaroussel(position);

});

function createDots(){
	 const dots = document.querySelector(".dots");	
	for (let index = 0; index < slides.length; index++) {
		const dot= document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	} 
}

function updateDot() {
    listPoints[position].add('dot_selected');
    const previousIndex = position > 0 ? position - 1 : finalIndex;
	listPoints[previousIndex].remove('dot_selected');
}  
	

function createCaroussel(position){
  	const element = slides[position];
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
		p.innerHTML= element.tagLine;

    updateDot();
}