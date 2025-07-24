
const Carousels = document.querySelectorAll('.carousel-wrapper');

Carousels.forEach((carousel) => {
    const cards = carousel.querySelectorAll('.Card');

    cards.forEach((card) => {
        card.addEventListener('mouseover', () => hoverList(card));
        card.addEventListener('mouseout', () => removeHoverList(card));
    });
});

function hoverList(card) {
    if (card.querySelector('.hover-icons')) return;

    let container = document.createElement("div");
    container.className = "hover-icons m-2 position-absolute top-0 end-0 z-3";

    let ul = document.createElement("ul");
    ul.className = "m-0 bg-light rounded p-2";

    ul.innerHTML = `
        <li class="mb-2 mt-2"><i class="fa-solid fa-heart"></i></li>
        <li class="mb-2"><i class="fa-solid fa-arrows-turn-to-dots"></i></li>
        <li class="mb-2"><i class="fa-brands fa-searchengin"></i></li>
        <li><i class="fa-solid fa-cart-plus"></i></li>
    `;

    container.appendChild(ul);
    card.appendChild(container);
}

function removeHoverList(card) {
    const hoverIcons = card.querySelector('.hover-icons');
    if (hoverIcons) {
        hoverIcons.remove();
    }
}