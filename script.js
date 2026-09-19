// Get all images

let images = document.querySelectorAll(".image-box img");

let currentIndex = 0;


// Open image

function openImage(src) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("largeImage").src = src;

    // Find clicked image

    for (let i = 0; i < images.length; i++) {

        if (images[i].src == src) {
            currentIndex = i;
        }

    }
}


// Close image

function closeImage() {

    document.getElementById("lightbox").style.display = "none";

}


// Next image

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("largeImage").src =
        images[currentIndex].src;
}


// Previous image

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("largeImage").src =
        images[currentIndex].src;
}