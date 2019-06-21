class Carousel {
    constructor(images) {
        this.images = images;
        console.log(this.images);

        var imgArray = Array.from(this.images);
        var currentImage = imgArray[0];
        console.log(currentImage);
        
        var imageIndices = imgArray.map((img) => img.dataset.tab);
        console.log(imageIndices);
        
        var currentImageIndex = currentImage.dataset.tab;

        this.currentIndex = imageIndices.indexOf(currentImageIndex);
        console.log(this.currentIndex);

        this.images[this.currentIndex].style.display = "flex";

        var leftBtn = document.querySelector('.left-button');
        var rightBtn = document.querySelector('.right-button');

        leftBtn.addEventListener('click', () => this.left());
        rightBtn.addEventListener('click', () => this.right());

    }
    left() {
        console.log('left work?');
        this.images[this.currentIndex].style.display = "none";
        //console.log(this.currentIndex);
        this.currentIndex -= 1;
        if (this.currentIndex == -1) {
            this.currentIndex = 3;
        }
        this.images[this.currentIndex].style.display = "flex";
    }
    right() {
        console.log("right work?")
        this.images[this.currentIndex].style.display = "none";
        //console.log(this.currentIndex);
        this.currentIndex += 1;
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].style.display = "flex";
    }
}

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img')
// console.log(carousel);
// console.log(images); //4 images

toCarosel = new Carousel(images);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
