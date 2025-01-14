const skillsCards = document.getElementById("skills-cards");
const cards = document.querySelectorAll(".cards");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

let currentIndex = 0;
const itemsPerView = 3;
const cardWidth = 300; // Largura das cartas (ajustar conforme necessário)

function updateCarousel() {
    skillsCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;  // Ajustando o valor conforme o índice
    updateCardSizes();
}

function updateCardSizes() {
    cards.forEach((card, index) => {
        card.style.transform = "scale(1)";  // Resetando o valor de transformação
        card.children[0].style.transform = "scale(1)";
    });

    // Centralizando o card atual
    const middleIndex = (currentIndex + Math.floor(itemsPerView / 2)) % cards.length;
    cards[middleIndex].style.transform = "scale(1.2)";
    cards[middleIndex].children[0].style.transform = "scale(1.2)";
}

function moveCarouselForward() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

let interval = setInterval(moveCarouselForward, 3000);

skillsCards.addEventListener("mouseenter", () => clearInterval(interval));
skillsCards.addEventListener("mouseleave", () => {
    interval = setInterval(moveCarouselForward, 3000);
});

leftArrow.addEventListener("click", () => {
    currentIndex = currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1;
    updateCarousel();
});

rightArrow.addEventListener("click", moveCarouselForward);

updateCarousel();
